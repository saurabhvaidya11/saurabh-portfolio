from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, Resume, Suggestion
from .serializers import ProjectSerializer, ResumeSerializer, SuggestionSerializer
from django.conf import settings
#from openai import OpenAI
from rest_framework import status
from .models import Resume


# Create your views here.
#Create API View to get all projects
@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


#create AI API 
# client = OpenAI(api_key=settings.OPEN_AI_KEY)
#@api_view(['POST'])
# def ai_assistant(request):

#     user_message = request.data.get("message")

#     prompt = f"""
#     You are an AI assistant for Saurabh Vaidya's portfolio.

#     Saurabh is a Fullstack Developer skilled in:
#     - Python
#     - Django
#     - React
#     - REST APIs
#     - AI integration

#     Help clients and answer professionally.

#     User question: {user_message}
#     """

#     completion = client.chat.completions.create(
#         model="gpt-4o-mini",
#         messages=[
#             {"role": "system", "content": "You are a professional portfolio assistant."},
#             {"role": "user", "content": prompt}
#         ]
#     )

#     reply = completion.choices[0].message.content

#     return Response({
#         "reply": reply
#     })

@api_view(['POST'])
def ai_assistant(request):

    message = request.data.get("message", "").lower()

    if "project" in message:

        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)

        return Response({
            "reply": "Here are some of my projects:",
            "projects": serializer.data
        })

    elif "contact" in message:

        return Response({
            "reply": "You can contact me at: 917083900511 or email saurabhvaidya2003@gmail.com"
        })

    elif "skill" in message:

        return Response({
            "reply": "My skills include Python, Django, React, Frontend, AI integration, REST APIs, and Fullstack development."
        })

    elif "hire" in message:

        return Response({
            "reply": "Yes, I am available for freelance projects. You can contact me on WhatsApp or email."
        })

    elif "who are you" in message:

        return Response({
            "reply": "I am Saurabh's AI assistant. I can tell you about his skills and projects."
        })

    else:

        return Response({
            "reply": "Hello! I am Saurabh's AI assistant. Ask about projects, skills, or contact."
        })
    
#suggestion create
@api_view(['POST'])
def create_suggestion(request):

    serialize = SuggestionSerializer(data=request.data)
    if serialize.is_valid():
        serialize.save()
        return Response({"message": "Suggestion submitted successfully"})
    return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)

class ResumeView(APIView):
    def get(self, request):
        return Response({"message": "Resume Fetched"})