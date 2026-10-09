from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models import Sum, Count
from .models import Order, OrderItem
from .serializers import OrderSerializer
from apps.sellers.models import Seller
from apps.products.models import Product

class SellerOrderListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else None)

        if seller:
            order_ids = OrderItem.objects.filter(seller=seller).values_list('order_id', flat=True).distinct()
            orders = Order.objects.filter(id__in=order_ids).order_by('-created_at')
        elif username:
            orders = []
        else:
            orders = Order.objects.all().order_by('-created_at')

        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class OrderStatusUpdateView(APIView):
    permission_classes = [AllowAny]

    def patch(self, request, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)

        new_status = request.data.get('status')
        if new_status in dict(Order.STATUS_CHOICES):
            order.status = new_status
            order.save()
            return Response(OrderSerializer(order).data, status=status.HTTP_200_OK)
        return Response({"error": "Invalid status option"}, status=status.HTTP_400_BAD_REQUEST)

class SellerDashboardAnalyticsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else None)
        
        if seller:
            total_products = Product.objects.filter(seller=seller).count()
            low_stock_products = Product.objects.filter(seller=seller, stock__lte=5).count()
            order_items = OrderItem.objects.filter(seller=seller)
            total_revenue = order_items.aggregate(Sum('subtotal'))['subtotal__sum'] or 0.00
            total_orders = order_items.values('order_id').distinct().count()
            pending_orders = Order.objects.filter(items__seller=seller, status='pending').distinct().count()
        elif username:
            total_products = 0
            low_stock_products = 0
            total_revenue = 0.00
            total_orders = 0
            pending_orders = 0
        else:
            seller_first = Seller.objects.first()
            total_products = Product.objects.filter(seller=seller_first).count() if seller_first else 0
            low_stock_products = Product.objects.filter(seller=seller_first, stock__lte=5).count() if seller_first else 0
            order_items = OrderItem.objects.filter(seller=seller_first) if seller_first else OrderItem.objects.none()
            total_revenue = order_items.aggregate(Sum('subtotal'))['subtotal__sum'] or 0.00
            total_orders = order_items.values('order_id').distinct().count()
            pending_orders = Order.objects.filter(items__seller=seller_first, status='pending').distinct().count() if seller_first else 0

        return Response({
            "total_revenue": float(total_revenue),
            "total_orders": total_orders,
            "pending_orders": pending_orders,
            "total_products": total_products,
            "low_stock_products": low_stock_products,
            "store_rating": 4.9,
        }, status=status.HTTP_200_OK)
