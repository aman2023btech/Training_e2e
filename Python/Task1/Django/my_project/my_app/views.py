from django.shortcuts import render
from django.shortcuts import HttpResponseRedirect
from my_app.models import Contact
from my_app.service import myapp_service
# Create your views here.

def display_home(request):
    return render(request, 'home.html')

# def display_contact(request):
#     return render(request, 'contact_us.html')

def index(request):
    if request.method=='POST':
       name=request.POST.get('name')
       email=request.POST.get('email')
       phone=request.POST.get('phone')
       desc=request.POST.get('desc')
       message=request.POST.get('message')
       contact=Contact(name=name,email=email,phone=phone,desc=desc,message=message)
       contact.save()
    return render(request,'contact_us.html')


def display_info(request):
    page_data= myapp_service.get_data()
    pdata={'data':page_data['data'],'message':page_data['message']}
    return render(request, 'info.html', pdata)

def remove(request,*agrs, **kwargs):
    myapp_service.delete_data(kwargs['id'])
    return HttpResponseRedirect('/info')

# def about(request):
#     return HttpResponse("This is about page")
