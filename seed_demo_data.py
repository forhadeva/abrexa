import os
import sys
import django

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'abrexa_backend.settings')
django.setup()

from apps.sellers.models import Seller, Store
from apps.products.models import Category, Product
from apps.orders.models import Order, OrderItem

def seed():
    print("Seeding ABREXA demo data...")

    # 1. Create Default Seller
    seller, created = Seller.objects.get_or_create(
        username="demoseller",
        defaults={
            "email": "seller@abrexa.com",
            "phone": "01700000000",
            "store_name": "Abrexa Official Tech Store",
            "is_verified_seller": True,
            "balance": 18450.00
        }
    )
    if created:
        seller.set_password("seller123")
        seller.save()
        Store.objects.get_or_create(
            seller=seller,
            defaults={
                "name": "Abrexa Official Tech Store",
                "description": "Official Abrexa Gadgets & Electronics Hub",
                "total_sales_count": 142,
                "total_revenue": 18450.00,
                "rating": 4.9
            }
        )
        print(f"Created Seller: {seller.username}")

    # 2. Create Categories
    cat_elec, _ = Category.objects.get_or_create(name="Electronic Accessories", slug="electronic", icon="fa-mobile-screen-button")
    cat_fashion, _ = Category.objects.get_or_create(name="Fashion & Lifestyle", slug="fashion", icon="fa-shirt")
    cat_beauty, _ = Category.objects.get_or_create(name="Beauty & Personal Care", slug="beauty", icon="fa-wand-magic-sparkles")

    # 3. Create Sample Products for Seller
    p1, _ = Product.objects.get_or_create(
        sku="ABX-GIMBAL-01",
        defaults={
            "seller": seller,
            "category": cat_elec,
            "title": "3-in-1 Phone Gimbal Stabilizer",
            "price": 499.00,
            "original_price": 999.00,
            "discount_percent": 50,
            "stock": 14,
            "sold_count": 44,
            "rating": 4.8,
            "image_url": "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=400&q=80",
            "description": "Professional 3-Axis Gimbal Stabilizer for Android & iPhone filming."
        }
    )

    p2, _ = Product.objects.get_or_create(
        sku="ABX-EAR-02",
        defaults={
            "seller": seller,
            "category": cat_elec,
            "title": "Lenovo Graphene Neckband Earphones",
            "price": 173.00,
            "original_price": 399.00,
            "discount_percent": 57,
            "stock": 32,
            "sold_count": 68,
            "rating": 4.6,
            "image_url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
            "description": "High bass bluetooth 5.2 neckband wireless earphones."
        }
    )

    p3, _ = Product.objects.get_or_create(
        sku="ABX-WATCH-03",
        defaults={
            "seller": seller,
            "category": cat_fashion,
            "title": "SKMEI 1787 Stainless Steel Watch",
            "price": 342.00,
            "original_price": 999.00,
            "discount_percent": 66,
            "stock": 3,
            "sold_count": 89,
            "rating": 4.9,
            "image_url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
            "description": "Waterproof luxury quartz movement watch for men."
        }
    )

    # 4. Create Sample Orders
    order1, _ = Order.objects.get_or_create(
        order_number="ORD-2026-8801",
        defaults={
            "customer_name": "Rafiqul Islam",
            "customer_phone": "01811223344",
            "shipping_address": "House 12, Road 4, Dhanmondi, Dhaka",
            "total_amount": 998.00,
            "payment_status": "paid",
            "status": "processing"
        }
    )
    OrderItem.objects.get_or_create(order=order1, product=p1, defaults={"seller": seller, "quantity": 2, "unit_price": 499.00, "subtotal": 998.00})

    order2, _ = Order.objects.get_or_create(
        order_number="ORD-2026-8802",
        defaults={
            "customer_name": "Tanvir Hossain",
            "customer_phone": "01999887766",
            "shipping_address": "GEC Circle, Chittagong",
            "total_amount": 342.00,
            "payment_status": "paid",
            "status": "pending"
        }
    )
    OrderItem.objects.get_or_create(order=order2, product=p3, defaults={"seller": seller, "quantity": 1, "unit_price": 342.00, "subtotal": 342.00})

    print("Demo data seeded successfully!")

if __name__ == '__main__':
    seed()
