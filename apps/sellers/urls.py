from django.urls import path
from .views import (
    SellerRegisterView,
    SellerLoginView,
    SellerProfileView,
    SellerPayoutView,
    AdminDashboardOverviewView,
    AdminApproveSellerView,
    AdminApprovePayoutView
)

urlpatterns = [
    path('register/', SellerRegisterView.as_view(), name='seller-register'),
    path('login/', SellerLoginView.as_view(), name='seller-login'),
    path('profile/', SellerProfileView.as_view(), name='seller-profile'),
    path('payouts/', SellerPayoutView.as_view(), name='seller-payouts'),
    path('admin/overview/', AdminDashboardOverviewView.as_view(), name='admin-overview'),
    path('admin/approve-seller/', AdminApproveSellerView.as_view(), name='admin-approve-seller'),
    path('admin/approve-payout/', AdminApprovePayoutView.as_view(), name='admin-approve-payout'),
]
