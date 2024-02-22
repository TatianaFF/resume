from django.contrib import admin
from django.urls import path
from resume_app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin', admin.site.urls),
    path('person', views.person_get),
    path('contacts', views.contacts_get),
    path('education', views.education_get),
    path('experience', views.experience_get),
    path('categories', views.categories_get),
    path('skills', views.skills_get),
    path('professions', views.professions_get),
    path('portfolio', views.portfolio_get),
    path('feedback', views.send_post_email)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)