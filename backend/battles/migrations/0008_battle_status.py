# Generated by Django 2.2.10 on 2020-03-09 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('battles', '0007_auto_20200305_0043'),
    ]

    operations = [
        migrations.AddField(
            model_name='battle',
            name='status',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
