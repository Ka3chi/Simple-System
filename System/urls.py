from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('usermanagement/', views.usermanagement, name='usermanagement'),
    path('deleteuser/<int:id>/', views.deleteuser, name='deleteuser'),
    # path('updateuser/', views.updateuser, name='updateuser'),
    path('usermanagement/usermodal/<int:id>/', views.usermodal, name='usermodal'),
    path('product/', views.product, name='product'),
]