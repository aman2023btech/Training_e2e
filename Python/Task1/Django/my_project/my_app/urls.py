from django.contrib import admin
from django.urls import path
from my_app import views

urlpatterns = [
    path('', views.display_home),
    path('contact',views.index,name="index"),
    path('info', views.display_info),
    path('delete/<str:id>', views.remove)
]