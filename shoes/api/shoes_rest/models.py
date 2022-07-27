from django.db import models

# Create your models here.

class Shoe(models.Model):
  name = models.CharField(max_length=50)
  color = models.CharField(max_length=50)
  picture_url = models.URLField()
  bin = models.ForeignKey(
    "BinVO",
    related_name="bins",
    
  )