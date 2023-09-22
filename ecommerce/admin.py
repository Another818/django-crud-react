from django.contrib import admin
from .models import Cliente, Producto, Proveedor, Compra, Provee

# Register your models here.
admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(Proveedor)
admin.site.register(Compra)
admin.site.register(Provee)

