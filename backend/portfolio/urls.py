from django.urls import path
from .views import (
    get_projects,
    ai_assistant,
    ResumeView,
    ResumeUploadView,
    create_suggestion
)

urlpatterns = [
    path('projects/', get_projects),
    path('ai/', ai_assistant),
    path('resume/', ResumeView.as_view()),
    path('resume/upload/', ResumeUploadView.as_view()),
    path('suggestion/', create_suggestion),
]