# Generated by Django 4.2.9 on 2024-02-06 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume_app', '0002_category_contacts_education_experience_person_skills'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='skills',
            name='profession',
            field=models.IntegerField(null=True),
        ),
    ]