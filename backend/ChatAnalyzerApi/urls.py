from django.urls import path
from . import views  # Import views module from the current directory

urlpatterns = [
    path('upload/', views.FileUploadView.as_view(), name='file-upload'),
]
