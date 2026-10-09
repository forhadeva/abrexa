from rest_framework import serializers
from .models import Seller, Store, Payout

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'logo', 'banner', 'description', 'total_sales_count', 'total_revenue', 'rating']

class SellerRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    store_name = serializers.CharField(required=True)

    class Meta:
        model = Seller
        fields = ['id', 'username', 'email', 'password', 'phone', 'store_name']

    def create(self, validated_data):
        store_name = validated_data.pop('store_name')
        password = validated_data.pop('password')
        seller = Seller(**validated_data)
        seller.set_password(password)
        seller.store_name = store_name
        seller.save()

        # Create Store profile automatically
        Store.objects.create(seller=seller, name=store_name)
        return seller

class SellerLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class SellerProfileSerializer(serializers.ModelSerializer):
    store_profile = StoreSerializer(read_only=True)

    class Meta:
        model = Seller
        fields = ['id', 'username', 'email', 'phone', 'store_name', 'is_verified_seller', 'balance', 'store_profile']

class PayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payout
        fields = ['id', 'seller', 'amount', 'payment_method', 'account_number', 'status', 'created_at']
        read_only_fields = ['seller', 'status', 'created_at']
