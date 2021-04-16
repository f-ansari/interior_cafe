from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    image = db.Column(db.String(255), default='', nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    post = db.relationship(
        "Post", backref=db.backref('images_post', lazy=True))
    user = db.relationship(
        "User", backref=db.backref('images_user', lazy=True))

    def __init__(self, user_id, post_id, image=''):
        self.user_id = user_id,
        self.post_id = post_id,
        self.image = image

    def json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "image": self.image,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    # here for testing purposes
    @classmethod
    def find_all(cls):
        images = Image.query.all()
        return [image.json() for image in images]
