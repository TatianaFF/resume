from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
# from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from django.core.mail import send_mail


@api_view(['GET'])
def person_get(request):
    if request.method == 'GET':
        data = Person.objects.all()
        serializer = PersonSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def contacts_get(request):
    if request.method == 'GET':
        data = Contacts.objects.all()
        serializer = ContactsSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def education_get(request):
    if request.method == 'GET':
        data = Education.objects.all()
        serializer = EducationSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def experience_get(request):
    if request.method == 'GET':
        data = Experience.objects.all()
        serializer = ExperienceSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def categories_get(request):
    if request.method == 'GET':
        data = Category.objects.all()
        serializer = CategorySerializer(data, context={'request': request}, many=True)
        print(serializer.data)
        return Response(serializer.data)


@api_view(['GET'])
def skills_get(request):
    if request.method == 'GET':
        data = Skills.objects.all()
        serializer = SkillsSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def portfolio_get(request):
    if request.method == 'GET':
        return Response('portfolio')

@api_view(['GET'])
def professions_get(request):
    if request.method == 'GET':
        data = Profession.objects.all()
        serializer = ProfessionSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def send_post_email(request):
    if request.method == 'POST':
        send_mail(
            subject = "subject",
            message = request.POST.get('message'),
            from_email = request.POST.get('email'),
            recipient_list = [settings.NOTIFY_EMAIL]
        )
        return Response(status = status.HTTP_204_NO_CONTENT)