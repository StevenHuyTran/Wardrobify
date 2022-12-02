from django.shortcuts import render

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_hats(request, account_vo_id=None):
    if request.method == "GET":
        if account_vo_id is not None:
