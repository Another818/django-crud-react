from rest_framework import viewsets
from .models import Cliente, Producto, Proveedor, Compra, Provee
from .serializer import ClienteSerializer, ProductoSerializer, ProveedorSerializer, CompraSerializer, ProveeSerializer
# Create your views here.

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class ProveedorView(viewsets.ModelViewSet):
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

class CompraView(viewsets.ModelViewSet):
    serializer_class = CompraSerializer
    queryset = Compra.objects.all()

class ProveeView(viewsets.ModelViewSet):
    serializer_class = ProveeSerializer
    queryset = Provee.objects.all()
