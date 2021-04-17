from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    username = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(100), default='', nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    posts = db.relationship("Post", cascade='all',
                            backref=db.backref('user_posts', lazy=True))
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('user_comments', lazy=True))
    images = db.relationship("Image", cascade='all',
                             backref=db.backref('user_images', lazy=True))

    def __init__(self, first_name, last_name, username, password_digest, email=''):
        self.first_name = first_name,
        self.last_name = last_name,
        self.username = username,
        self.email = email,
        self.password_digest = password_digest

    def json(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        users = User.query.all()
        return [user.json() for user in users]

    @classmethod
    def find_one(cls, username):
        user = User.query.filter_by(username=username).first()
        return user

    @classmethod
    def include_posts_comments_images(cls, user_id):
        user = User.query.options(joinedload(
            'posts_user'), joinedload('images_user'), joinedload('comments_user')).filter_by(id=user_id).first()
        posts = [post.json() for post in user.posts]
        images = [image.json() for image in user.images]
        comments = [comment.json() for comment in user.comments]
        return {**user.json(), "posts": posts, "images": images, "comments": comments}
