from rest_framework import serializers
from .models import Order, OrderItem
from apps.products.serializers import ProductSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    product_title = serializers.CharField(source='product.title', read_only=True)
    product_image = serializers.CharField(source='product.image_url', read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'product_title', 'product_image', 'quantity', 'unit_price', 'subtotal']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'customer_name', 'customer_phone', 
            'shipping_address', 'total_amount', 'payment_status', 'status', 
            'created_at', 'items'
        ]
