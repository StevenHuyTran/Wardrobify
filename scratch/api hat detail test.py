
@require_http_methods(["DELETE", "GET", "PUT"])
def api_hat_detail(request, location):
    if request.method == "GET":
        try:
            hat = Hat.objects.get(location=location)
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            hat = Hat.objects.get(location=location)
            hat.delete()
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            hat = Hat.objects.get(location=location)

            props = ["fabric", "style_name", "color", "picture_url"]
            for prop in props:
                if prop in content:
                    setattr(hat, prop, content[prop])
            hat.save()
            return JsonResponse(
                hat,
                encoder=Hat,
                safe=False,
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
