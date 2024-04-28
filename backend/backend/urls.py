from django.contrib import admin # Import the admin module
from django.urls import path, include # Import functions for defining URL patterns 
from ChatAnalyzerApi.views import CreateUserView # Import the CreateUserView class for user registration 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView # Import views for JWT token management


  # Define URL patterns
urlpatterns = [
         path('admin/', admin.site.urls),  # Map the URL '/admin/' to the Django admin interface
         path("ChatAnalyzerApi/user/register/", CreateUserView.as_view(), name="register"),  # Map the URL '/api/user/register/' to the CreateUserView for user registration
         path("ChatAnalyzerApi/token/", TokenObtainPairView.as_view(), name="get_token"),  # Map the URL '/api/token/' to the TokenObtainPairView for obtaining JWT tokens
         path("ChatAnalyzerApi/token/refresh/", TokenRefreshView.as_view(), name="refresh"),  # Map the URL '/api/token/refresh/' to the TokenRefreshView for refreshing JWT tokens
         path("ChatAnalyzerApi-auth/", include("rest_framework.urls")),  # Include the Django REST Framework's authentication URLs
        path("ChatAnalyzerApi/",include("ChatAnalyzerApi.urls")) #By including "api.urls", you're telling Django to include all URL patterns defined in the urls.py file of your api app.
     ]