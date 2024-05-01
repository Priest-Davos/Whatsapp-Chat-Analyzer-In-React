import os
# import preprocessor as preprocessor
from . import preprocessor # for preprocessing of chat file

def get_files_from_folder(folder_path='uploadedFiles'):
    try:
        files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        return files
    except Exception as e:
        # print(f"Error getting files from folder: {e}")
        return None

def extract_data_from_file(file_path):
    # print(file_path)
    try:
        with open(file_path, 'r') as file:
            file_content = file.read()
            return file_content
    except Exception as e:
        # print(f"Error extracting data from file: {e}")
        return None
  
def get_df(folder_path):      
    files = get_files_from_folder(folder_path)
    df=[]
    # print(files)
    if files:
        for file_name in files: 
            file_path =os.path.normpath( os.path.join(folder_path, file_name))
            # print(file_path)
            # print(file_name)
            file_content = extract_data_from_file(file_path)
            if file_content:
                # print(f"File: {file_name}\nContent:\n{file_content}\n")
                processed_data = preprocessor.preprocess(file_content)
                df.append(processed_data)
            return df
# def get_df(folder_path, file_name):
#     file_path =os.path.normpath( os.path.join(folder_path, file_name))
#     file_content = extract_data_from_file(file_path)
#     df=[]
#     if file_content:
#                 # print(f"File: {file_name}\nContent:\n{file_content}\n")
#                 processed_data = preprocessor.preprocess(file_content)
#                 df.append(processed_data)
#     return df   
# print(get_df("backend/uploadedFiles","WhatsApp_Chat_with_Dost_31.txt"))
# current_dir = os.path.dirname(__file__)
# print("dead")
# print(current_dir)
