from django.contrib.auth import login, get_user_model, logout, update_session_auth_hash, get_user
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.db.models import Count
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView, BaseUpdateView, BaseDeleteView
from django.views.generic.list import BaseListView
from taggit.models import Tag

from blog.models import Post
from accounts.forms import MyUserCreationForm
from accounts.views import MyLoginRequiredMixin
from accounts.views import OwnerOnlyMixin
from api.views_util import obj_to_post, prev_next_post, make_tag_cloud


class ApiPostLV(BaseListView):
    # model = Post
    def get_queryset(self):
        # request.GET에 쿼리스트링이 존재하고, 딕셔너리 타입이므로 get함수를 이용하여 추출할 수 있다. 없다면 널 반환
        tagname = self.request.GET.get('tagname')
        if tagname:
            qs = Post.objects.filter(tags__name=tagname)
        else:
            qs = Post.objects.all()
        return qs

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)

class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):

        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=True, status=200)


class ApiTagCloudLV(BaseListView):
    # model = Tag
    queryset = Tag.objects.annotate(count=Count('post'))

    # def get_queryset(self):
    #     return Tag.objects.all()

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']

        tagList = make_tag_cloud(qs)
        return JsonResponse(data=tagList, safe=False, status=200)

class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        userDict = {
            'id': user.id,
            'username': user.username,
        }
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiRegisterView(BaseCreateView):
    form_class = MyUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            'id': self.object.id,
            'username': self.object.username,
        }
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)

        return JsonResponse(data={}, safe=True, status=200)

class ApiPwdchgView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        update_session_auth_hash(self.request, form.user)
        return JsonResponse(data={}, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApimeView(View):
    def get(self, request, *args, **kwargs):
        user = get_user(request)

        # 해당 사용자가 로그인이 되어있으면
        if user.is_authenticated:
            userDict = {
                'id': user.id,
                'username': user.username,
            }
        else:
            userDict ={
                'username': 'Anonymous',
            }

        return JsonResponse(data=userDict, safe=True, status=200)

# LoginRequiredMixin 클래스에 있는 dispatch 함수를 오버라이딩하여 권한 설정을 한다. (현재 accounts.views에 존재함)
class ApiPostCV(MyLoginRequiredMixin, BaseCreateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        form.instance.owner = self.request.user
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiPostUV(OwnerOnlyMixin, BaseUpdateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiPostDelV(OwnerOnlyMixin, BaseDeleteView):
    # 지우는 과정을 할 때도, model 정의를 하여 어떤 디비의 레코드를 지우는지 장고가 알게 해줘야 한다.
    model = Post

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, safe=True, status=204)