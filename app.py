from flask import Flask
# from models.db import db
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from sqlalchemy.orm import joinedload
# from models import
# from resources import

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/memestagram_db'
app.config['SQLALCHEMY_ECHO'] = True

# db.init_app(app)
# migrate = Migrate(app, db)

# api.add_resource()

if __name__ == '__main__':
    app.run(debug=True)