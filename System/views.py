from django.shortcuts import render

from .models import Accounts

# Create your views here.

def dashboard(request):
    return render(request, 'Dashboard/dashboard.html')

def index(request):
    return render(request, 'Dashboard/dashboard.html')

def usermanagement(request):
    accounts = Accounts.objects.all()
    return render(request, 'Usermanagement/usermanagement.html', {'accounts': accounts})
    