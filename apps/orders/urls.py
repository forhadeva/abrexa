from django.urls import path
from .views import SellerOrderListView, OrderStatusUpdateView, SellerDashboardAnalyticsView

urlpatterns = [
    path('seller-orders/', SellerOrderListView.as_view(), name='seller-orders'),
    path('<int:pk>/status/', OrderStatusUpdateView.as_view(), name='order-status-update'),
    path('analytics/overview/', SellerDashboardAnalyticsView.as_view(), name='analytics-overview'),
]
