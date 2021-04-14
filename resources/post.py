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


class PostDetails(Resource):
    # def get(self, post_id):
    #     data = Post.find_by_id(post_id)
    #     return data.json()

    def get(self, post_id):
        post = Post.include_images(post_id)
        return post

    def put(self, post_id):
        post = Post.find_by_id(post_id)
        data = request.get_json()
        for key in data:
            setattr(post, key, data[key])
        db.session.commit()
        return post.json()

    def delete(self, post_id):
        post = Post.find_by_id(post_id)
        db.session.delete(post)
        db.session.commit()
        return {'msg': 'Post deleted', 'payload': post.id}
