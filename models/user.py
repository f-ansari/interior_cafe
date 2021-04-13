from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    password_digest = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    posts = db.relationship("Post", cascade='all',
                            backref=db.backref('user_posts', lazy=True))
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('user_comments', lazy=True))

    def __init__(self, first_name, last_name, username, email, password_digest):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.email = email
        self.password_digest = password_digest
