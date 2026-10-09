from django.urls import path
from .views import CategoryListView, SellerProductListCreateView, ProductDetailView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('seller-products/', SellerProductListCreateView.as_view(), name='seller-products'),
    path('<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]
