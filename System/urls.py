from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('usermanagement/', views.usermanagement, name='usermanagement'),
    path('deleteuser/<int:id>/', views.deleteuser, name='deleteuser'),
    path('search_product/', views.search_product, name='search_product'),
    path('search_user/', views.search_user, name='search_user'),
    path('usermanagement/usermodal/<int:id>/', views.usermodal, name='usermodal'),
    path('product/', views.product, name='product'),
]