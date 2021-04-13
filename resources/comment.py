from models.db import db
from flask import request
from models.comment import Comment
from flask_restful import Resource


class Comments(Resource):
    def post(self):
        comment = Comment(**request.get_json())
        comment.create()
        return comment.json(), 201

    def get(self):
        comment = Comment.find_all()
        return comment
