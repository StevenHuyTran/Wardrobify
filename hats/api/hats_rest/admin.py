from django.contrib import admin
from .models import Hat, LocationVO


# Register your models here.

@admin.register(Hat)
class HatsAdmin(admin.ModelAdmin):
    pass


@admin.register(LocationVO)
class LocationVOAdmin(admin.ModelAdmin):
    pass
