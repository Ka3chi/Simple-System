from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('usermanagement/', views.usermanagement, name='usermanagement'),
    # path('createuser/', createuser, name='createuser'),
]