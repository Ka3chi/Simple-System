from django.shortcuts import render

# Create your views here.
 
def dashboard(request):
    return render(request, 'Dashboard/dashboard.html')

def index(request):
    return render(request, 'Main/index.html')

def usermanagement(request):
    return render(request, 'Usermanagement/usermanagement.html')