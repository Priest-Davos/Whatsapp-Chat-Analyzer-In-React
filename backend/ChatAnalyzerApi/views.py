from django.contrib.auth.models import User


from .serializers import UserSerializer,UploadedFileSerializer
from rest_framework import generics,status
from rest_framework.permissions import IsAuthenticated, AllowAny  # Import permission classes from Django REST Framework
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

import os #for manually upload_file_locally
from django.conf import settings #for manually upload_file_locally
from .models import UploadedFile

from rest_framework.parsers import FormParser, MultiPartParser

from ChatAnalyzerApi.utils.get_dataframe import get_df
import shutil
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class FileUploadView(APIView):
     # This method determines which note instances are returned on a GET request
    def get_queryset(self):
        user = self.request.user# Access the user from the request object (the user making the request)
        return UploadedFile.objects.filter(owner=user)# Filter and return only the files where the authenticated user is the owner
    
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        delete_old_folder()#manually deleting folder fith all previous uploaded file
        files_responses = []
        uploaded_files = request.FILES.getlist('files')
        if not uploaded_files:
            return Response({'error': 'No files uploaded.'}, status=status.HTTP_400_BAD_REQUEST)

        for file in uploaded_files:
            
            file_instance = UploadedFile(file=file)
            file_instance.name = file.name  # Optionally set other fields like owner, if applicable
            serializer = UploadedFileSerializer(file_instance, data={'file': file}, context={'request': request})
            if serializer.is_valid():
                serializer.save(owner=self.request.user)  # Save the model and file will be automatically handled
                files_responses.append(serializer.data)
                
                # To manually upload file locally (optional)
                # upload_file_locally(file)# dont need as  Django's FileField model field automatically handles saving
                
                # Additional file handling can be done here
                # extract_data(file)          
            else:
                print("serializer not valid")
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'message': 'Files uploaded successfully', 'files': files_responses}, status=status.HTTP_201_CREATED)
    
# Handle the logic to save or process the uploaded file
# For example, save the file to a folder manually but not in the database
def upload_file_locally(file):
    upload_dir = os.path.join(settings.MEDIA_ROOT,file.name)
    if not os.path.exists(os.path.dirname(upload_dir)):
            os.makedirs(os.path.dirname(upload_dir))
    with open(upload_dir, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)


# currently will manually deleting the folder 
def delete_old_folder(folder_path="uploadedFiles"):
    try:
        shutil.rmtree(folder_path)  # Remove the folder and all its contents
        # print(f"Deleted old folder at {folder_path}")
    except FileNotFoundError:
        print(f"Folder does not exist at {folder_path}, nothing to delete")
    except Exception as e:
        print(f"Error deleting folder: {e}")

#this meth will fetch the df from the folder
def fetch_data_from_local_path(folder_path):
    if os.path.exists(folder_path):
        # print(get_df(folder_path))
        return(get_df(folder_path))
    else:
        return ("folder dont exist")
    

class DataFrameAPIView(APIView):
    def get(self, request):
        try:
            df= fetch_data_from_local_path(folder_path="uploadedFiles")
            # print(type(df))
            # Convert DataFrame to JSON
            json_data = df.to_json(orient='records', date_format='iso')
            # print(json_data)

            # Return JSON response with success status code
            return Response(json_data, status=status.HTTP_200_OK)
        except Exception as e:
            # Return error response with appropriate status code and error message
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# def extract_data(file):
#     try:
#         file_content = file.read().decode()  # Assuming it's a text file and decoding it to a string
#         # Print or process the file content further
#         print(file_content)
#         print(file.name)
#         # Optionally, return the file content for further processing
#         return file_content
#     except Exception as e:
#         raise Exception(f"Error processing file: {e}")