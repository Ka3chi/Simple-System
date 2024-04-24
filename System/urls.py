from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    
    path('pointofsale/', views.pointofsale, name='pointofsale'),
    path('add_to_cart/', views.add_to_cart, name='add_to_cart'),

    
    path('usermanagement/', views.usermanagement, name='usermanagement'),
    path('deleteuser/<int:id>/', views.deleteuser, name='deleteuser'),
    path('search_user/', views.search_user, name='search_user'),
    path('usermanagement/updateuser/<int:id>/', views.updateuser, name='updateuser'),
    
    path('product/', views.product, name='product'),
    path('search_product/', views.search_product, name='search_product'),
    path('deleteproduct/<str:product_id>/', views.deleteproduct, name='deleteproduct'),
    path('product/updateproduct/<str:product_id>/', views.updateproduct, name='updateproduct'),
    
]