from django.db import models
from django.contrib.auth.models import AbstractUser

class Seller(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, null=True)
    store_name = models.CharField(max_length=255, blank=True, null=True)
    nid_number = models.CharField(max_length=50, blank=True, null=True)
    is_verified_seller = models.BooleanField(default=False)
    balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} ({self.store_name or 'No Store'})"

class Store(models.Model):
    seller = models.OneToOneField(Seller, on_delete=models.CASCADE, related_name='store_profile')
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='stores/logos/', blank=True, null=True)
    banner = models.ImageField(upload_to='stores/banners/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    total_sales_count = models.IntegerField(default=0)
    total_revenue = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    rating = models.FloatField(default=5.0)

    def __str__(self):
        return self.name

class Payout(models.Model):
    PAYMENT_METHODS = (
        ('bkash', 'bKash'),
        ('nagad', 'Nagad'),
        ('rocket', 'Rocket'),
        ('bank', 'Bank Transfer'),
    )
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )

    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='payouts')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHODS, default='bkash')
    account_number = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payout {self.amount} BDT for {self.seller.username} ({self.status})"
