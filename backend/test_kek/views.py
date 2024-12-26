from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def test_kek(request):
    chats = [1, 2, 3, 4, 5, 6]
    return JsonResponse({'chats': chats})