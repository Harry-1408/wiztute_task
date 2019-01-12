from django.urls import path, include
from django.views.generic.base import TemplateView
from faq import views
print faq
urlpatterns = [
    path('faq/list', faqList.as_view(), name='faq_list')
]