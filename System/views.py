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

#UPDATE PASSWORD
# def changepassword(request, id):
#     if request.method == 'POST':
#         accounts = CustomUser.objects.get(id=id)
#         accounts.set_password('')
#         accounts.save()
#     return redirect('usermanagement')
def changepassword(request, id):
    if request.method == 'POST':
        # Get the user object
        try:
            user = CustomUser.objects.get(id=id)
        except CustomUser.DoesNotExist:
            # Handle the case where the user doesn't exist
            return redirect('usermanagement')  # Redirect back to user management page or show an error message

        # Get the new password from the form input
        new_password = request.POST.get('new_password')  # Assuming your form field is named 'new_password'

        # Perform basic password validation
        if len(new_password) < 8:  # Example: Minimum password length is 8 characters
            # Return a response indicating invalid password
            return redirect('usermanagement')  # Redirect back to user management page or show an error message

        # Set the new password
        user.set_password(new_password)

        # Save the user object to persist the changes
        user.save()

        # Redirect to user management page or any other appropriate page
        return redirect('usermanagement')

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
