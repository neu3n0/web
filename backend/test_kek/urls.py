from django.urls import path
from test_kek.views import test_kek

urlpatterns = [
    path('', test_kek, name='test_kek'),
]