from django.db import models

class MyModel(models.Model):
    id = models.AutoField(primary_key=True)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.phone

class Education(models.Model):
    start_year = models.IntegerField(null=True)
    end_year = models.IntegerField(null=True)
    institute = models.CharField(max_length=240, null=True)
    department = models.CharField(max_length=240, null=True)


class Experience(models.Model):
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    company = models.CharField(max_length=240, null=True)
    description = models.CharField(max_length=2048, null=True)


class Skills(models.Model):
    title = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=2048, null=True)
    logo = models.CharField(max_length=512, null=True)
    category = models.IntegerField(null=True)
    profession = models.IntegerField(null=True)


class Person(models.Model):
    first_name = models.CharField(max_length=240, null=True)
    last_name = models.CharField(max_length=240, null=True)
    patronymic = models.CharField(max_length=240, null=True)
    birthday = models.DateField(auto_now_add=False, null=True)
    city = models.CharField(max_length=240, null=True)
    country = models.CharField(max_length=240, null=True)
    about = models.CharField(max_length=2048, null=True)
    photo = models.CharField(max_length=512, null=True)


class Contacts(models.Model):
    title = models.CharField(max_length=240, null=True)
    info = models.CharField(max_length=240, null=True)
    logo = models.CharField(max_length=512, null=True)


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True, null=True)

    def __str__(self):
        return self.name


class Profession(models.Model):
    name = models.CharField(max_length=50, unique=True, null=True)

    def __str__(self):
            return self.name
