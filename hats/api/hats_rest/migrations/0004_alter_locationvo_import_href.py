# Generated by Django 4.0.3 on 2022-12-03 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0003_rename_href_locationvo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationvo',
            name='import_href',
            field=models.CharField(blank=True, max_length=300, null=True, unique=True),
        ),
    ]
