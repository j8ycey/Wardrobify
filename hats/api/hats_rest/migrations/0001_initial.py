# Generated by Django 4.0.3 on 2022-07-27 21:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LocationVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('closet_name', models.CharField(max_length=100)),
                ('section_number', models.PositiveSmallIntegerField()),
                ('shelf_number', models.PositiveSmallIntegerField()),
            ],
            options={
                'ordering': ('closet_name', 'section_number', 'shelf_number'),
            },
        ),
        migrations.CreateModel(
            name='Hat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fabric', models.CharField(max_length=200)),
                ('style_name', models.CharField(max_length=200)),
                ('color', models.CharField(max_length=200)),
                ('picture_url', models.URLField()),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hats', to='hats_rest.locationvo')),
            ],
        ),
    ]