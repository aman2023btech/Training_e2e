from django.contrib import admin
from django.urls import path
from my_app1 import views

urlpatterns = [
    path('page1', views.display_page1),
    path('page2', views.display_page2)
]