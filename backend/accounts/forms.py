from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm


class MyUserCreationForm(UserCreationForm):
    # meta 클래스를 상속 받을 때에는 상위 클래스를 상속 받아야한다.
    class Meta(UserCreationForm.Meta):
        model = get_user_model()