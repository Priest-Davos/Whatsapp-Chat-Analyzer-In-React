from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UploadedFile(models.Model):
     name = models.CharField(max_length=255)
     file = models.FileField()
     uploaded_at = models.DateTimeField(auto_now_add=True)
     owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="files")
     def __str__(self):
        return self.name
