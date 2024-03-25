from django.shortcuts import render, redirect
from django.http import JsonResponse
from System.forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib.auth.models import User

from .models import *

# Create your views here.
def dashboard(request):
    return render(request, 'Dashboard/dashboard.html')

def product(request):
    return render(request, 'Product/product.html')

def index(request):
    return render(request, 'Dashboard/dashboard.html')

def addusermodal(request):
    return render(request, "UsermanagementModals/addusermodal.html")

#DELETE USER
def deleteuser(request,id):
    erase = CustomUser.objects.get(id=id)
    erase.delete()
    return redirect('usermanagement')

# def update()
def usermodal(request, id):
    accounts = CustomUser.objects.get(id=id)
    userform = CustomUserChangeForm(instance=accounts)
    # auto_id='update_%s'
    
    if request.method == "POST":
        userform = CustomUserChangeForm(request.POST, instance=accounts)
        
        if userform.is_valid():
            userform.save()
            return redirect('usermanagement')

        else: 
            print(userform.errors)         
            
    context = {
        "accounts" : accounts,
        "userform" : userform,
        
    }
    
    return render(request, 'Usermanagement/usermodal.html', context)

#render usermanagement and create user
def usermanagement(request):
    accounts = CustomUser.objects.all()
    userform = CustomUserCreationForm()
    
    
    # form submit
    if request.method == "POST":
        userform = CustomUserCreationForm(request.POST)

        if userform.is_valid():
            userform.save()
            return JsonResponse({'success': True})
        else:
            print(userform.errors)
             
    context = {
        "accounts" : accounts,
        "userform" : userform,
        
    }
    
    userform.fields['password1'].widget.attrs.update({
        'class' : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900",
                
        'placeholder': " ",
    })
    userform.fields['password2'].widget.attrs.update({
        'class' : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900",
                
        'placeholder': " ",
    })
    
    return render(request, 'Usermanagement/usermanagement.html', context)
