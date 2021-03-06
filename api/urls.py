from django.urls import path

from .views import CreateRoomView, GetRoom, RoomView


urlpatterns = [
    path('room', RoomView.as_view()),
    path('create_room', CreateRoomView.as_view()),
    path('get_room', GetRoom.as_view()),
]
