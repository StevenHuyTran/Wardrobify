from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Hat, LocationVO
from common.json import ModelEncoder
import json


from .encoders import (
    HatListEncoder,
    HatDetailEncoder,
)



# Create your views here.


@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats = Hat.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            location_href = content["location"]
            location = LocationVO.objects.get(import_href=location_href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False
        )




@require_http_methods(["DELETE", "GET", "PUT"])
# @require_http_methods(["DELETE", "GET"])
def api_hat_detail(request, pk):
    if request.method == "GET":
        try:
            hat = Hat.objects.get(id=pk)
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            Hat.objects.filter(id=pk).update(**content)
            hat = Hat.objects.get(id=pk)
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else: #DELETE
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
