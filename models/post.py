from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey(users.id), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    like = db.Column(db.Integer, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=date.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship("User", backref=db.backref('posts_user', lazy=True))
    images = db.relationship("Image", cascade='all',
                             backref=db.backref('post_images'), lazy=True)
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('post_comments', lazy=True))

    def __init__(self, post_id, title, description, like):
        self.post_id = post_id,
        self.title = title,
        self.description = description
        self.like = like
