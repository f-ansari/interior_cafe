from models.db import db
from datetime import datetime
from sqlalchemy.orm import joinedload


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    like = db.Column(db.Integer, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False, onupdate=datetime.now())
    user = db.relationship("User", backref=db.backref('posts_user', lazy=True))
    images = db.relationship("Image", cascade='all',
                             backref=db.backref('post_images'), lazy=True)
    comments = db.relationship(
        "Comment", cascade='all', backref=db.backref('post_comments', lazy=True))

    def __init__(self, user_id, title, description, like):
        self.user_id = user_id
        self.title = title,
        self.description = description,
        self.like = like

    def json(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self. description,
            "like": self.like,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at)
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all_post(cls):
        posts = Post.query.all()
        return [post.json() for post in posts]

    @classmethod
    def find_all(cls):
        posts = Post.query.options(joinedload(
            'images_post')).all()
        array = []
        for post in posts:
            array.append({**post.json(), "images": [image.json()
                                                    for image in post.images if post.images]})
        return array

    @classmethod
    def find_by_id(cls, post_id):
        return Post.query.filter_by(id=post_id).first()

    @classmethod
    def user_post_images(cls, user_id):
        posts = Post.query.options(joinedload(
            'images_post')).filter_by(user_id=user_id).all()
        array = []
        for post in posts:
            array.append({**post.json(), "images": [image.json()
                                                    for image in post.images if post.images]})
        return array

    @classmethod
    def include_images(cls, post_id):
        post = Post.query.options(joinedload(
            'images_post')).filter_by(id=post_id).first()
        images = [image.json() for image in post.images]
        return {**post.json(), "images": images}
