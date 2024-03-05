from .views import index
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('usermanagement/', views.usermanagement, name='usermanagement'),
]