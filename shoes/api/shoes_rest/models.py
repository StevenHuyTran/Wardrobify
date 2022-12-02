from django.db import models

# Create your models here.

class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()
    bin_size = models.PositiveSmallIntegerField()
  

    def __str__(self):
        return self.closet_name

class Shoe(models.Model):
    manufacturer = models.CharField(max_length=50)
    model_name = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    picture_url = models.URLField(null=True, blank=True)
    bin = models.ForeignKey(
        BinVO,
        related_name="bins",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.model_name

  
