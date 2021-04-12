from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Coloumn(db.Integer, primary_key=True)
    title = db.Coloumn(db.String(255), nullable=False)
    description = db.Coloumn(db.String(500), nullable=False)
    like = db.Coloumn(db.Integer, nullable=False)
