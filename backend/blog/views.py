from django.views.generic import TemplateView


class PostListTV(TemplateView):
    # TemplateView를 상속 받는다면, template_name은 무조건 넣어줘야한다.
    template_name = 'blog/post_list.html'


class PostDetailTV(TemplateView):
    template_name = 'blog/post_detail.html'

class PostScrapTV(TemplateView):
    template_name = 'blog/post_scrap.html'
