from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship(
        "User", backref=db.backref('comments_user', lazy=True))
    post = db.relationship(
        "Post", backref=db.backref('comment_post', lazy=True))

    def __init__(self, user_id, post_id, comment):
        self.user_id = user_id,
        self.post_id = post_id,
        self.comment = comment

    def json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "comment": self.comment,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
