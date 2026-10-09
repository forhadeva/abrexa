from django.db import models
from apps.sellers.models import Seller
from apps.products.models import Product

class Order(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    )

    order_number = models.CharField(max_length=50, unique=True)
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    shipping_address = models.TextField()
    total_amount = models.DecimalField(max_digits=12, decimal_places=2)
    payment_status = models.CharField(max_length=20, default='paid')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.order_number} ({self.status})"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='order_items')
    quantity = models.IntegerField(default=1)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity}x {self.product.title} for Order #{self.order.order_number}"
