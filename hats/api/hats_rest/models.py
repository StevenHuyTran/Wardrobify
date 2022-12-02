from django.db import models
from django.urls import reverse


# Create your models here.


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("api_location", kwargs={"pk": self.pk})

    def __str__(self):
        return f"{self.closet_name} - {self.section_number}/{self.shelf_number}"

    class Meta:
        ordering = ("closet_name", "section_number", "shelf_number")


class Hats(models.Model):
    fabric = models.CharField(max_length=20)
    style_name = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    picture_url = models.URLField(null=True, blank=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="locations",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.style_name
