from common.json import ModelEncoder
from .models import Hat, LocationVO

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = [
        "closet_name",
        "import_href",
        "shelf_number",
        "section_number",
    ]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "id",
        "style_name",
        "color",
        "fabric",
        "location",
        "picture_url",
    ]
    encoders={
        "location": LocationVOEncoder()
    }


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric",
        "style_name",
        "color",
        "location",
        "picture_url",
    ]
    encoders = {
        "location": LocationVOEncoder(),
    }
