# Generated by Django 2.2.12 on 2020-04-01 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0005_pokemon_img_url'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pokemon',
            options={'ordering': ('poke_id',), 'verbose_name_plural': 'Pokemon'},
        ),
    ]
