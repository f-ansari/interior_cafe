from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Coloumn(db.Integer, primary_key=True)
    title = db.Coloumn(db.String(255), nullable=False)
    description = db.Coloumn(db.String(500), nullable=False)
    like = db.Coloumn(db.Integer, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=date.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship("User", backref=db.backref('posts_user', lazy=True))
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('post_comments', lazy=True))
