from django.shortcuts import render

# Create your views here.

def display_page1(request):
    return render(request, 'page1.html')

def display_page2(request):
    return render(request, 'page2.html')


