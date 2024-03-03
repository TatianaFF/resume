from django.db import migrations
import datetime

inst = "Институт космических и информационных технологий Сибирского федерального университета"
department = "Информационные системы и технологии"
about = \
    "Окончила Институт космических и информационных технологий Сибирского федерального университета. " \
    "Изучала C# (Windows Forms, WPF), Python (Django). " \
    "Во время обучения работала в компании ООО ИК Сибинтек специалистом тех поддержки. " \
    "После завершения обучения устроилась в компанию ООО Софт-центр на должность Kotlin разработчика. " \
    "Сейчас рассматриваю предложения на вакансию React разработчик"


def create_data(apps, schema_editor):
    Education = apps.get_model('resume_app', 'Education')
    Education(
        start_year=2018,
        end_year=2022,
        institute=inst,
        department=department
    ).save()

    Experience = apps.get_model("resume_app", "Experience")
    Experience(
        start_date=datetime.date(year=2021, month=2, day=1),
        end_date=datetime.date(year=2022, month=11, day=1),
        company="ООО ИК Сибинтек",
        description="Сопровождение ИС"
    ).save()
    Experience(
        start_date=datetime.date(year=2023, month=3, day=1),
        end_date=datetime.date(year=2023, month=12, day=10),
        company="ООО Софт-Центр",
        description="Kotlin разработчик"
    ).save()

    Category = apps.get_model('resume_app', 'Category')
    Category(
        name="Языки программирования"
    ).save()
    Category(
        name="Библиотеки"
    ).save()
    Category(
        name="Базы данных"
    ).save()
    Category(
        name="Паттерны проектирования"
    ).save()
    Category(
        name="Операционные системы"
    ).save()
    Category(
        name="Другое"
    ).save()

    Profession = apps.get_model('resume_app', 'Profession')
    Profession(
        name="React"
    ).save()
    Profession(
        name="Android"
    ).save()
    Profession(
        name="Python"
    ).save()
    Profession(
        name=".NET"
    ).save()
    Profession(
        name="Другое"
    ).save()

    Person = apps.get_model('resume_app', 'Person')
    Person(
        first_name="Татьяна",
        last_name="Сергеева",
        patronymic="Николаевна",
        birthday=datetime.date(year=2000, month=5, day=10),
        city="Красноярск",
        country="Россия",
        about=about,
        photo="media/photo/avatar.jpg"
    ).save()

    Contacts = apps.get_model('resume_app', 'Contacts')
    Contacts(
        title="Telegram",
        info="TatianaFF",
        logo="media/photo/icons/tg.png"
    ).save()
    Contacts(
        title="Gmail",
        info="tsff2018@gmail.com",
        logo="media/photo/icons/mail.png"
    ).save()
    Contacts(
        title="Git",
        info="https://github.com/TatianaFF",
        logo="media/photo/icons/git.png"
    ).save()

    Skills = apps.get_model('resume_app', 'Skills')
    Skills(
        title="Kotlin",
        description="",
        logo="",
        category=1,
        profession=2
    ).save()
    Skills(
        title="Java",
        description="",
        logo="",
        category=1,
        profession=2
    ).save()
    Skills(
        title="Coroutines",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Notifications",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Service",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Room",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Dagger",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Ktor",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="WorkManager",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="Retrofit",
        description="",
        logo="",
        category=2,
        profession=2
    ).save()
    Skills(
        title="MVVM",
        description="",
        logo="",
        category=4,
        profession=5
    ).save()
    Skills(
        title="MVC",
        description="",
        logo="",
        category=4,
        profession=5
    ).save()
    Skills(
        title="MSSQL",
        description="",
        logo="",
        category=3,
        profession=4
    ).save()
    Skills(
        title="PostgreSQL",
        description="",
        logo="",
        category=3,
        profession=1
    ).save()
    Skills(
        title="MongoDB",
        description="",
        logo="",
        category=3,
        profession=3
    ).save()
    Skills(
        title="Windows",
        description="",
        logo="",
        category=5,
        profession=5
    ).save()
    Skills(
        title="Linux",
        description="",
        logo="",
        category=5,
        profession=5
    ).save()
    Skills(
        title="SOLID",
        description="",
        logo="",
        category=6,
        profession=5
    ).save()
    Skills(
        title="Git",
        description="",
        logo="",
        category=6,
        profession=5
    ).save()
    Skills(
        title="ООП",
        description="",
        logo="",
        category=6,
        profession=5
    ).save()
    Skills(
        title="C#",
        description="",
        logo="",
        category=1,
        profession=4
    ).save()
    Skills(
        title="Python",
        description="",
        logo="",
        category=1,
        profession=3
    ).save()
    Skills(
        title="Django",
        description="",
        logo="",
        category=2,
        profession=3
    ).save()
    Skills(
        title="JavaScript",
        description="",
        logo="",
        category=1,
        profession=1
    ).save()
    Skills(
        title="TypeScript",
        description="",
        logo="",
        category=1,
        profession=1
    ).save()
    Skills(
        title="React",
        description="",
        logo="",
        category=2,
        profession=1
    ).save()
    Skills(
        title="CSS",
        description="",
        logo="",
        category=1,
        profession=1
    ).save()
    Skills(
        title="HTML",
        description="",
        logo="",
        category=1,
        profession=1
    ).save()
    Skills(
        title="WF",
        description="",
        logo="",
        category=2,
        profession=4
    ).save()
    Skills(
        title="SQL",
        description="",
        logo="",
        category=3,
        profession=4
    ).save()
    Skills(
        title="WPF",
        description="",
        logo="",
        category=2,
        profession=4
    ).save()
    Skills(
        title="Flux",
        description="",
        logo="",
        category=4,
        profession=1
    ).save()
    Skills(
        title="Antd",
        description="",
        logo="",
        category=4,
        profession=1
    ).save()
    Skills(
        title="Redux thunk",
        description="",
        logo="",
        category=2,
        profession=1
    ).save()
    Skills(
        title="React Final Form",
        description="",
        logo="",
        category=2,
        profession=1
    ).save()
    Skills(
        title="React redux",
        description="",
        logo="",
        category=2,
        profession=1
    ).save()
    Skills(
        title="React router",
        description="",
        logo="",
        category=2,
        profession=1
    ).save()
    Skills(
        title="Ajax",
        description="",
        logo="",
        category=4,
        profession=1
    ).save()


class Migration(migrations.Migration):

    dependencies = [
        ('resume_app', '0003_profession_skills_profession'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]