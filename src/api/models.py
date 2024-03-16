from api.models import db
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Vendor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String(120), nullable=False)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=True)
    reviews = db.Column(db.Integer, default=0)
    price = db.Column(db.Float, nullable=False)
    delivery_time = db.Column(db.String(50), nullable=False)
    top_rated = db.Column(db.Boolean, default=False)
    gender = db.Column(db.String(10), nullable=False)
    years_of_experience = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "service": self.service,
            "name": self.name,
            "description": self.description,
            "reviews": self.reviews,
            "price": self.price,
            "delivery_time": self.delivery_time,
            "top_rated": self.top_rated,
            "gender": self.gender,
            "years_of_experience": self.years_of_experience
        }