from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from apps.sellers.models import Seller

class CategoryListView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SellerProductListCreateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else None)
        
        if seller:
            products = Product.objects.filter(seller=seller).order_by('-created_at')
        elif username:
            products = []
        else:
            products = Product.objects.all().order_by('-created_at')
            
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        username = request.data.get('username') or request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else Seller.objects.first())
        if not seller:
            return Response({"error": "Seller required"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(seller=seller)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
