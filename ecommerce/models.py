from django.db import models

# Create your models here.
class Cliente(models.Model):
    ci = models.IntegerField(primary_key=True, verbose_name='CI')
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    direccion = models.CharField(max_length=60)
    telefono = models.CharField(max_length=10)

    class Meta:
        managed = False  # Indica que Django no debe gestionar esta tabla
        db_table = 'cliente'  # Nombre de la tabla existente en la base de datos

    def __str__(self):
        return f"{self.ci} | {self.nombre} {self.apellido}"

class Producto(models.Model):
    cod_producto = models.IntegerField(primary_key=True, verbose_name='COD_PRODUCTO')
    nombre = models.CharField(max_length=20)
    marca = models.CharField(max_length=15)
    color = models.CharField(max_length=12)
    stock = models.IntegerField()
    precio = models.IntegerField()

    class Meta:
        managed = False  # Indica que Django no debe gestionar esta tabla
        db_table = 'producto'  # Nombre de la tabla existente en la base de datos

    def __str__(self):
        return f"{self.cod_producto} | {self.nombre}"

class Proveedor(models.Model):
    id_proveedor = models.IntegerField(primary_key=True, verbose_name='ID_PROVEEDOR')
    nombre = models.CharField(max_length=20)
    direccion = models.CharField(max_length=30)
    telefono = models.IntegerField()

    class Meta:
        managed = False  # Indica que Django no debe gestionar esta tabla
        db_table = 'proveedor'  # Nombre de la tabla existente en la base de datos

    def __str__(self):
        return f"{self.id_proveedor} | {self.nombre}"

class Compra(models.Model):
    id_compra = models.AutoField(primary_key=True)  # Campo ID_COMPRA con AutoField
    ci = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True, db_column='CI')  # Clave foránea hacia Cliente
    cod_producto_id = models.ForeignKey(Producto, on_delete=models.CASCADE, null=True, db_column='COD_PRODUCTO')  # Clave foránea hacia Producto
    fecha_compra = models.DateField(null=True)  # Campo FECHA_COMPRA
    cantidad = models.IntegerField(null=True)  # Campo CANTIDAD

    class Meta:
        managed = False  # Indica que Django no debe gestionar esta tabla
        db_table = 'compra'  # Nombre de la tabla existente en la base de datos

    def __str__(self):
        return f"Compra {self.id_compra}"
    
class Provee(models.Model):
    id_detalle = models.AutoField(primary_key=True)  # Campo ID_COMPRA con AutoField
    id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE, null=True, db_column='ID_PROVEEDOR')  # Clave foránea hacia Cliente
    cod_producto = models.ForeignKey(Producto, on_delete=models.CASCADE, null=True, db_column='COD_PRODUCTO')  # Clave foránea hacia Producto
    fecha = models.DateField(null=True)  # Campo FECHA_COMPRA
    cantidad = models.IntegerField(null=True)  # Campo CANTIDAD

    class Meta:
        managed = False  # Indica que Django no debe gestionar esta tabla
        db_table = 'provee'  # Nombre de la tabla existente en la base de datos

    def __str__(self):
        return f"Producto: {self.cod_producto} proveido por {self.id_proveedor}"