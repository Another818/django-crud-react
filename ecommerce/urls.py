from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from ecommerce import views


router = routers.DefaultRouter()
router.register(r'clientes', views.ClienteView, 'clientes')
router.register(r'productos', views.ProductoView, 'productos')
router.register(r'proveedores', views.ProveedorView, 'proveedores')
router.register(r'compras', views.CompraView, 'compras')
router.register(r'provee', views.ProveeView, 'provee')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Datos API"))
]