from django.shortcuts import render, redirect
from django.http import HttpResponse

from .models import Accounts

# Create your views here.

def dashboard(request):
    return render(request, 'Dashboard/dashboard.html')

def index(request):
    return render(request, 'Dashboard/dashboard.html')

def usermanagement(request):
    accounts = Accounts.objects.all()
    if request.method == 'POST':
        username = request.POST.get('username')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        info = Accounts.objects.create(username=username, firstname=firstname, lastname=lastname, email=email, password=password) 
        return render(request, 'Usermanagement/usermanagement.html', {'accounts': accounts})
    else:
        return render(request, 'Usermanagement/usermanagement.html', {'accounts': accounts})
