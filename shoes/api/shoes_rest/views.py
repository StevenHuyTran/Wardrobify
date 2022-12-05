from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import BinVO, Shoe

# Create your views here.
class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "import_href",
        "closet_name"
    ]

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "id",
    ]

    def get_extra_data(self, o):
        return {"bin": o.bin.closet_name}

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]
    encoders = {
        "bin": BinVOEncoder()
    }

@require_http_methods({"GET", "POST"})
def api_list_shoes(requests, bin_vo_id=None):
    if requests.method == "GET":
        if bin_vo_id is not None:
            shoe = Shoe.objects.filter(bin=bin_vo_id)
        else:
            shoe = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoe},
            encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(requests.body)
        try:
            bin_href = content["bin"]
            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400,
            )
        shoes = Shoe.objects.create(**content)
        return JsonResponse(
            shoes,
            encoder=ShoeDetailEncoder,
            safe=False,
        )


