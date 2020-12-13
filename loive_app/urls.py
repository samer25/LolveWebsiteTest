from django.urls import path

from loive_app.views import LandingPage

urlpatterns = [
    path('', LandingPage.as_view(), name='landing page'),
]
