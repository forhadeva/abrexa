from rest_framework import serializers
from .models import Category, Product, ProductImage

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'icon']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'image_url']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    gallery_images = serializers.ListField(
        child=serializers.CharField(allow_blank=True),
        write_only=True,
        required=False
    )
    category_name = serializers.CharField(source='category.name', read_only=True)
    seller_store_name = serializers.SerializerMethodField()
    seller_rating = serializers.SerializerMethodField()
    image_url = serializers.CharField(required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = Product
        fields = [
            'id', 'seller', 'seller_store_name', 'seller_rating', 'category', 'category_name', 'title', 'sku', 
            'price', 'original_price', 'discount_percent', 'stock', 'sold_count', 
            'rating', 'reviews_count', 'is_flash_sale', 'image_url', 'description', 
            'created_at', 'images', 'gallery_images'
        ]
        read_only_fields = ['seller', 'created_at']

    def create(self, validated_data):
        gallery_images = validated_data.pop('gallery_images', [])
        product = super().create(validated_data)
        for img_url in gallery_images:
            if img_url and str(img_url).strip():
                ProductImage.objects.create(product=product, image_url=img_url.strip())
        return product

    def update(self, instance, validated_data):
        gallery_images = validated_data.pop('gallery_images', None)
        product = super().update(instance, validated_data)
        if gallery_images is not None:
            product.images.all().delete()
            for img_url in gallery_images:
                if img_url and str(img_url).strip():
                    ProductImage.objects.create(product=product, image_url=img_url.strip())
        return product

    def get_seller_store_name(self, obj):
        if obj.seller:
            store_name = getattr(obj.seller, 'store_name', '')
            if store_name:
                return store_name
            if hasattr(obj.seller, 'store_profile') and obj.seller.store_profile:
                return obj.seller.store_profile.name
        return 'ABREXA Partner Store'

    def get_seller_rating(self, obj):
        if obj.seller and hasattr(obj.seller, 'store_profile') and obj.seller.store_profile:
            return float(obj.seller.store_profile.rating)
        return 4.9
