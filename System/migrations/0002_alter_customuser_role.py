# Generated by Django 5.0.1 on 2024-03-14 02:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('System', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('ADMIN', 'admin'), ('STAFF', 'staff')], max_length=50),
        ),
    ]
