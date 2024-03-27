from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from flask_jwt_extended import jwt_required

# User – Login
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
    name = db.Column(db.String(128))
    service1 = db.Column(db.String(128))
    service2 = db.Column(db.String(128))
    short_description = db.Column(db.String(256))
    long_description = db.Column(db.Text)
    reviews = db.Column(db.Integer)
    top_rated = db.Column(db.Boolean)
    price = db.Column(db.String(128))
    delivery_time = db.Column(db.String(128))
    years_of_experience = db.Column(db.Integer)
    image = db.Column(db.String(256))


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "service1": self.service1,
            "service2": self.service2,
            "short_description": self.short_description,
            "long_description": self.long_description,
            "reviews": self.reviews,
            "top_rated": self.top_rated,
            "price": self.price,
            "delivery_time": self.delivery_time,
            "years_of_experience": self.years_of_experience,
            "image": self.image,
        }


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stripe_id = db.Column(db.String(64))
    order_state = db.Column(db.String(64))
    hours = db.Column(db.Integer)
    price = db.Column(db.Integer)
    
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship(
        "User",
        uselist=False,
        backref=db.backref(
            "orders",
            uselist=True,
        )
    )

    vendor_id = db.Column(db.Integer, db.ForeignKey("vendor.id"))
    vendor = db.relationship(
        "Vendor",
        uselist=False,
        backref=db.backref(
            "orders",
            uselist=True,
        )
    )

    def serialize(self):
        return {
            "id": self.id,
            "stripe_id": self.stripe_id,
            "order_state": self.order_state,
            "hours": self.hours,
            "price": self.price,
            "user": self.user.serialize(),
            "vendor": self.vendor.serialize(),
        }
