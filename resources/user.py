from models.db import db
from flask import request
from models.user import User
from flask_restful import Resource


class Users(Resource):
    def get(self):
        users = User.find_all()
        return users


class UserPosts(Resource):
    def get(self, user_id):
        user = User.include_posts_comments_images(user_id)
        return user
