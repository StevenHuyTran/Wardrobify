# Generated by Django 4.0.3 on 2022-12-03 03:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hat',
            name='location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='hats', to='hats_rest.locationvo'),
        ),
    ]
