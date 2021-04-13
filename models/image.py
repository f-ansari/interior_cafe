from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(255), nullable=False)
