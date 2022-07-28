from django.db import models

# Create your models here.


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    picture_url = models.URLField(null=True, blank=True)
    bin = models.ForeignKey(
        "BinVO",
        related_name="shoes",
        on_delete=models.CASCADE,
    )


class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()
    bin_size = models.PositiveSmallIntegerField()