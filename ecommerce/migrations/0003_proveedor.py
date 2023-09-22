# Generated by Django 4.2.3 on 2023-08-07 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0002_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id_proveedor', models.IntegerField(primary_key=True, serialize=False, verbose_name='ID_PROVEEDOR')),
                ('nombre', models.CharField(max_length=20)),
                ('direccion', models.CharField(max_length=30)),
                ('telefono', models.IntegerField()),
            ],
            options={
                'db_table': 'proveedor',
                'managed': False,
            },
        ),
    ]
