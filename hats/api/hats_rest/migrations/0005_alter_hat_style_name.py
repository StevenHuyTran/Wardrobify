# Generated by Django 4.0.3 on 2022-12-06 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0004_alter_locationvo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hat',
            name='style_name',
            field=models.CharField(max_length=100),
        ),
    ]
