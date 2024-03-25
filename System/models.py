from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    NAME_CHOICES = {
    "ADMIN" : "admin",
    "STAFF" : "staff"
}
    role = models.CharField(max_length=50, null=False, choices = NAME_CHOICES )
    
class Product(models.Model):
    NAME_CHOICES = {
        "AVAILABLE" : "Available",
        "NOT AVAILABLE" : "Not Available"
    }
    product_id = models.CharField(max_length=50, unique=True)
    product_name = models.CharField(max_length=100)
    quantity = models.IntegerField(null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    status = models.CharField(max_length=50, null=False, choices=NAME_CHOICES)
    image = models.ImageField(upload_to='product_images/', null=False)
    
    def __str__(self):
        return self.product_name
    