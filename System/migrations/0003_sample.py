# Generated by Django 5.0.1 on 2024-03-14 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('System', '0002_alter_customuser_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sample',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('mname', models.CharField(max_length=50)),
                ('fname', models.CharField(max_length=50)),
                ('lname', models.CharField(max_length=50)),
                ('gname', models.CharField(choices=[('ADMIN', 'admin'), ('STAFF', 'staff')], max_length=50)),
            ],
        ),
    ]
