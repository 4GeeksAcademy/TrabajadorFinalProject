from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Vendor
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

# Vendor – Cards & Services Page


api = Blueprint('api', __name__)
CORS(api)


@api.route('/vendors', methods=['GET'])
def get_vendors():
    vendor_list = Vendor.query.all()
    return jsonify([vendor.serialize() for vendor in vendor_list]), 200


@api.route('/vendor', methods=['POST'])
def add_vendor():
    try:
        data = request.json
        new_vendor = Vendor(
            service=data['service'],
            name=data['name'],
            description=data['description'],
            reviews=data.get('reviews', 0),
            price=data['price'],
            delivery_time=data['delivery_time'],
            top_rated=data.get('top_rated', False)
        )
        db.session.add(new_vendor)
        db.session.commit()
        return jsonify(new_vendor.serialize()), 201
    except Exception as e:
        return jsonify({"error": "Unable to add vendor", "message": str(e)}), 400


@api.route('/vendor/<int:vendor_id>', methods=['PUT'])
@jwt_required()
def update_vendor(vendor_id):
    try:
        data = request.json
        vendor = Vendor.query.get(vendor_id)
        if not vendor:
            return jsonify({"error": "Vendor not found"}), 404

        vendor.service1 = data.get('service', vendor.service1)
        vendor.service2 = data.get('service', vendor.service2)
        vendor.name = data.get('name', vendor.name)
        vendor.short_description = data.get('short_description', vendor.short_description)
        vendor.long_description = data.get('long_description', vendor.long_description)
        vendor.reviews = data.get('reviews', vendor.reviews)
        vendor.price = data.get('price', vendor.price)
        vendor.delivery_time = data.get('delivery_time', vendor.delivery_time)
        vendor.top_rated = data.get('top_rated', vendor.top_rated)

        db.session.commit()
        return jsonify(vendor.serialize()), 200
    except Exception as e:
        return jsonify({"error": "Unable to update vendor", "message": str(e)}), 400