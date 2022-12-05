from django.db import models
from django.urls import reverse


# Create your models here.


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=300, null=True, blank=True, unique=True)

    def __str__(self):
        return self.closet_name


class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style_name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=100)
    picture_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return "Location VO ID : " + str(self.id) + " " + self.closet_name
