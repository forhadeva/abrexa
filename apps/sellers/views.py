from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from .models import Seller, Store, Payout
from .serializers import (
    SellerRegisterSerializer,
    SellerLoginSerializer,
    SellerProfileSerializer,
    PayoutSerializer
)

class SellerRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SellerRegisterSerializer(data=request.data)
        if serializer.is_valid():
            seller = serializer.save()
            return Response({
                "message": "Seller registered successfully!",
                "seller": SellerProfileSerializer(seller).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SellerLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SellerLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            seller = authenticate(request, username=username, password=password)
            if seller:
                login(request, seller)
                return Response({
                    "message": "Login successful!",
                    "seller": SellerProfileSerializer(seller).data
                }, status=status.HTTP_200_OK)
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SellerProfileView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        seller = None
        if username:
            seller = Seller.objects.filter(username=username).first() or Seller.objects.filter(email=username).first()
        if not seller and request.user.is_authenticated:
            seller = request.user
        if not seller:
            seller = Seller.objects.first()
        if not seller:
            return Response({"error": "No seller profile found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(SellerProfileSerializer(seller).data, status=status.HTTP_200_OK)

    def post(self, request):
        return self.update_profile(request)

    def put(self, request):
        return self.update_profile(request)

    def patch(self, request):
        return self.update_profile(request)

    def update_profile(self, request):
        username = request.data.get('username') or request.query_params.get('username')
        seller = None
        if username:
            seller = Seller.objects.filter(username=username).first() or Seller.objects.filter(email=username).first()
        if not seller and request.user.is_authenticated:
            seller = request.user
        if not seller:
            seller = Seller.objects.first()
        if not seller:
            return Response({"error": "No seller profile found"}, status=status.HTTP_404_NOT_FOUND)

        store_name = request.data.get('store_name') or request.data.get('company_name') or request.data.get('name')
        if store_name:
            store_name = store_name.strip()
            seller.store_name = store_name
            if hasattr(seller, 'store_profile') and seller.store_profile:
                seller.store_profile.name = store_name
                seller.store_profile.save()
            else:
                Store.objects.create(seller=seller, name=store_name)
        
        phone = request.data.get('phone')
        if phone:
            seller.phone = phone.strip()
            
        email = request.data.get('email')
        if email:
            seller.email = email.strip()

        seller.save()
        return Response({
            "message": "Seller profile updated successfully!",
            "seller": SellerProfileSerializer(seller).data
        }, status=status.HTTP_200_OK)

class SellerPayoutView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        username = request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else Seller.objects.first())
        if not seller:
            return Response([], status=status.HTTP_200_OK)
        payouts = Payout.objects.filter(seller=seller).order_by('-created_at')
        return Response(PayoutSerializer(payouts, many=True).data, status=status.HTTP_200_OK)

    def post(self, request):
        username = request.data.get('username') or request.query_params.get('username')
        seller = Seller.objects.filter(username=username).first() if username else (request.user if request.user.is_authenticated else Seller.objects.first())
        if not seller:
            return Response({"error": "Seller account required"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = PayoutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(seller=seller)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdminDashboardOverviewView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        from apps.orders.models import Order

        sellers = Seller.objects.all().order_by('-created_at')
        payouts = Payout.objects.all().order_by('-created_at')
        orders = Order.objects.all().order_by('-created_at')

        total_revenue = sum(float(o.total_amount) for o in orders if o.payment_status == 'paid')
        platform_commission = total_revenue * 0.05

        seller_list = []
        for s in sellers:
            store = getattr(s, 'store_profile', None)
            seller_list.append({
                "id": str(s.id),
                "username": s.username,
                "storeName": s.store_name or (store.name if store else s.username),
                "ownerName": (s.first_name + " " + s.last_name).strip() if (s.first_name or s.last_name) else s.username,
                "email": s.email or f"{s.username}@abrexa.com",
                "phone": s.phone or "",
                "nid": s.nid_number or "",
                "joinedDate": s.created_at.strftime('%Y-%m-%d'),
                "status": "verified" if s.is_verified_seller else "pending",
                "balance": float(s.balance),
                "totalSales": store.total_sales_count if store else 0,
                "totalRevenue": float(store.total_revenue) if store else 0.0,
                "rating": store.rating if store else 5.0
            })

        payout_list = []
        for p in payouts:
            payout_list.append({
                "id": str(p.id),
                "sellerName": p.seller.store_name or p.seller.username,
                "amount": float(p.amount),
                "method": p.get_payment_method_display(),
                "accountNumber": p.account_number,
                "requestedDate": p.created_at.strftime('%Y-%m-%d'),
                "status": p.status
            })

        customer_count = len(set(o.customer_phone for o in orders if o.customer_phone))

        return Response({
            "stats": {
                "totalRevenue": total_revenue,
                "platformCommission": platform_commission,
                "totalSellers": len(sellers),
                "verifiedSellers": len([s for s in sellers if s.is_verified_seller]),
                "pendingSellersCount": len([s for s in sellers if not s.is_verified_seller]),
                "totalCustomers": customer_count,
                "totalOrders": len(orders),
                "pendingPayoutsCount": len([p for p in payouts if p.status == 'pending'])
            },
            "sellers": seller_list,
            "payouts": payout_list
        }, status=status.HTTP_200_OK)

class AdminApproveSellerView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        seller_id = request.data.get('seller_id')
        seller = Seller.objects.filter(id=seller_id).first()
        if not seller:
            return Response({"error": "Seller not found"}, status=status.HTTP_404_NOT_FOUND)
        seller.is_verified_seller = True
        seller.save()
        return Response({"message": f"Seller {seller.username} verified successfully!"}, status=status.HTTP_200_OK)

class AdminApprovePayoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        payout_id = request.data.get('payout_id')
        payout = Payout.objects.filter(id=payout_id).first()
        if not payout:
            return Response({"error": "Payout not found"}, status=status.HTTP_404_NOT_FOUND)
        payout.status = 'approved'
        payout.save()
        return Response({"message": "Payout approved successfully!"}, status=status.HTTP_200_OK)
