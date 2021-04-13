from flask import Flask
from models.db import db
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from sqlalchemy.orm import joinedload
from models.user import User
from models.post import Post
from models.image import Image
from models.comment import Comment
from resources.auth import Login, Register
from resources.user import Users
from resources.post import Posts
from resources.image import Images
from resources.comment import Comments

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/interior_cafe_db'
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')

api.add_resource(Users, '/users')

api.add_resource(Posts, '/posts')

api.add_resource(Images, '/images')

api.add_resource(Comments, '/comments')

if __name__ == '__main__':
    app.run(debug=True)
