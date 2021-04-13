from models.db import db
from flask import request
from models.image import Image
from flask_restful import Resource


class Images(Resource):
    def post(self):
        image = Image(**request.get_json())
        image.create()
        return image.json(), 201

    def get(self):
        image = Image.find_all()
        return image
