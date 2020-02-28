from django import forms

from users.models import User  # noqa

from .models import Battle  # noqa


class CreateBattleForm(forms.ModelForm):
    pokemon_1 = forms.CharField(required=True)
    pokemon_2 = forms.CharField(required=True)
    pokemon_3 = forms.CharField(required=True)

    class Meta:
        model = Battle
        fields = ["opponent"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["opponent"].queryset = User.objects.exclude(id=self.initial["creator_id"])

    def clean(self):
        cleaned_data = super().clean()

        # validation logic here

        return cleaned_data
