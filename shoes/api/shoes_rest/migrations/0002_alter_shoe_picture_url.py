# Generated by Django 4.0.3 on 2022-07-28 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='picture_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
