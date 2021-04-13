from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_one(data['username'])
        if user and compare_password(data['password'], user.password_digest):
            payload = {
                'id': user.id,
                'username': user.username
            }
            token = create_token(payload)
            return {"token": token, "payload": payload}
        return {"msg": "Unauthorized"}, 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "first_name": data['first_name'],
            "last_name": data['last_name'],
            "username": data['username'],
            "user_email": data['user_email'],
            "password_digest": gen_password(data['password'])
        }
        user = User(**params)
        user.create()
        return user.json(), 201
