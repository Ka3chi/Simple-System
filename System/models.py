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
        "Available" : "AVAILABLE",
        "Not Available" : "NOT AVAILABLE"
    }
    image_src = "https://public.bnbstatic.com/image/cms/blog/20230605/026722ab-19ca-4c7a-ae61-a98af8851159.png"
    product_id = models.CharField(max_length=50, unique=True)
    product_name = models.CharField(max_length=100)
    quantity = models.IntegerField(null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    status = models.CharField(max_length=50, null=False, choices=NAME_CHOICES)
    image = models.ImageField(upload_to='image_path/', default=image_src)
    
    def __str__(self):
        return self.product_name
    