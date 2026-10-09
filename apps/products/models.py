from django.db import models
from apps.sellers.models import Seller

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=50, default='fa-box')

    def __str__(self):
        return self.name

class Product(models.Model):
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='products')
    title = models.CharField(max_length=255)
    sku = models.CharField(max_length=50, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    discount_percent = models.IntegerField(default=0)
    stock = models.IntegerField(default=10)
    sold_count = models.IntegerField(default=0)
    rating = models.FloatField(default=5.0)
    reviews_count = models.IntegerField(default=0)
    is_flash_sale = models.BooleanField(default=False)
    image_url = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} (৳{self.price})"

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/gallery/', blank=True, null=True)
    image_url = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Image for {self.product.title}"
