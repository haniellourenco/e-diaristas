# Generated by Django 3.2.8 on 2021-10-17 00:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diarista',
            name='cep',
            field=models.CharField(max_length=8),
        ),
    ]
