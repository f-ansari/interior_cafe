from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    post = db.relationship(
        "Post", backref=db.backref('images_post', lazy=True))

    def __init__(self, post_id, image):
        self.post_id = post_id,
        self.image = image
