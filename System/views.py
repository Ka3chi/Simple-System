from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from System.forms import CustomProductForm, CustomUserChangeForm, CustomUserCreationForm, Cartform
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import *

# Create your views here.
def dashboard(request):
    return render(request, 'Dashboard/dashboard.html')

# pos quantity modal
def add_to_cart(request):
     products = Product.objects.all()
     carts = Cart.objects.all()

     context = {
            "products" : products,
            "carts" : carts,
        }
     if request.method == 'POST':
        product_id = request.POST.get('product_id')
        quantity = int(request.POST.get('quantity', 1))  # Default to 1 if not provided

        if product_id:
            try:
                # Fetch the product using the product_id (which is a string)
                product = Product.objects.get(product_id=product_id)
            except Product.DoesNotExist:
                # Handle the case where the product does not exist
                return redirect('view_cart')  # Redirect or show an error message
            
            # Check if the product is already in the cart
            existing_item = Cart.objects.filter(product=product).first()
            if existing_item:
                existing_item.quantity += quantity
                existing_item.save()
            else:
                new_item = Cart(product=product, quantity=quantity)
                new_item.save()

            return render(request, 'POS/pos.html', context)  
        
        return render(request, 'POS/pos.html', context)

# def Itemstotal(request):
#     Carts = Cart.objects.all()
    
#     return

    # cart = Cartform.objects.all()
    # if request.method == 'POST':
    #     # product_id = request.POST.get('product_id')
    #     # quantity = int(request.POST.get('quantity'))
    #     cartform = models.objects.filter()
        
    #     # current_quantity = product.quantity
    #     # Ensure the quantity to subtract is not greater than the current quantity
    #     # if quantity <= current_quantity:
    #     #     product.quantity -= quantity
    #     #     cartform.save()
    # return render()

def deletecart(request,id):
    erase = Cart.objects.get(id=id)
    erase.delete()
    return redirect('pointofsale')

def pointofsale(request):
    products = Product.objects.all()
    carts = Cart.objects.all()

    context = {
        "products" : products,
        "carts" : carts,
    }
    return render(request, 'POS/pos.html', context)

def viewposproduct(request, product_id):
    product = Product.objects.get(product_id=product_id)
    return render(request, 'POS/pos.html', {'product': product})

# this is the main index
def index(request):
    return render(request, 'POS/pos.html')

# def update user
def updateproduct(request, product_id):
    products = Product.objects.get(product_id=product_id)
    productform = CustomProductForm(instance=products)
    
    if request.method == "POST":
        productform = CustomProductForm(request.POST, request.FILES, instance=products)
        
        if productform.is_valid():
            productform.save()
            return redirect('product')

        else: 
            print(productform.errors)         
            
    context = {
        "product" : products,
        "productform" : productform,
        
    }
    return render(request, 'Product/updateproduct.html', context)

# delete product
def deleteproduct(request,product_id):
    erase = Product.objects.get(product_id=product_id)
    erase.delete()
    return redirect('product')

# this is search product
def search_product(request):         
    if 'search' in request.GET:
        search = request.GET.get('search')
        products = Product.objects.filter(product_name__icontains=search)
        
    else:
        products = Product.objects.all()
    context = {
        "products" : products,
        
    }
    return render(request, 'Product/product.html', context)

def product(request):
    products = Product.objects.all()
    productform = CustomProductForm()

    product_list = Product.objects.all()  # Fetch all Product objects
    paginator = Paginator(product_list, 6)  # Show 6 products per page
    
    P = Paginator(Product.objects.all(),6)
    page = request.GET.get('page')
    products = P.get_page(page)

    page_number = request.GET.get('page')
    try:
        page_data = paginator.page(page_number)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        page_data = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        page_data = paginator.page(paginator.num_pages)

    # form submit
    if request.method == "POST":
        productform = CustomProductForm(request.POST, request.FILES)

        if productform.is_valid():
            productform.save()
            return redirect('product')

        else:
            print(productform.errors)
            
    else:
        productform = CustomProductForm()
               
    context = {
        'page_data': page_data,
        "products" : products,
        "productform" : productform,
        
    }
    return render(request, 'Product/product.html', context)

#for delete user
def deleteuser(request,id):
    erase = CustomUser.objects.get(id=id)
    erase.delete()
    return redirect('usermanagement')

#for search user
def search_user(request):         
    if 'search' in request.GET:
        search = request.GET.get('search')
        accounts = CustomUser.objects.filter(username__icontains=search)
        
    else:
        accounts = CustomUser.objects.all()
    context = {
        "accounts" : accounts,
    }
    return render(request, 'Usermanagement/usermanagement.html', context)

# def update user
def updateuser(request, id):
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
    return render(request, 'Usermanagement/updateuser.html', context)

#render usermanagement and create user
def usermanagement(request):
    accounts = CustomUser.objects.all()
    userform = CustomUserCreationForm()
    
    # Paginator 
    paginator = Paginator(accounts, 6)
    page = request.GET.get('page')
    accounts = paginator.get_page(page)
    
    page_number = request.GET.get('page')
    try:
        page_data = paginator.page(page_number)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        page_data = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        page_data = paginator.page(paginator.num_pages)
    
    # form submit
    if request.method == "POST":
        userform = CustomUserCreationForm(request.POST)

        if userform.is_valid():
            userform.save()
            userform = CustomUserCreationForm()
    
        else:
            print(userform.errors)
            
    else:
        userform = CustomUserCreationForm()
             
    context = {
        'page_data': page_data,
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
