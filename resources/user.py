from models.db import db
from flask import request
from models.user import User
from flask_restful import Resource


class Users(Resource):
    def get(self):
        users = User.find_all()
        return users
