from django.urls import path, include
from rest_framework import routers

from .views import TodoViewSet

app_name="todo"


router = routers.DefaultRouter()
router.register('todos', TodoViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
