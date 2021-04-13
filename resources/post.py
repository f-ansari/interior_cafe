from models.db import db
from flask import request
from models.post import Post
from flask_restful import Resource


class Posts(Resource):
    def post(self):
        post = Post(**request.get_json())
        post.create()
        return post.json(), 201

    def get(self):
        post = Post.find_all()
        return post
