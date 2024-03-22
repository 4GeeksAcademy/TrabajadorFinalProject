"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Vendor
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask import jsonify
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# Create flask app
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route("/register", methods=["POST"])
def create_user():
    """
    Request body:
    {
        "email": "test@test.com",
        "password": "p455w0rd"
    }
    """
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    db_user = User.query.filter_by(email=email).first()
    if db_user:
        return jsonify({"msg": "User already exists."}), 400
    db_user = User(
        email=email,
        password=password,
        is_active=True,
    )
    db.session.add(db_user)
    db.session.commit()
    return '', 204


@api.route("/token", methods=["POST"])
def create_token():
    """
    Request body:
    {
        "email": "test@test.com",
        "password": "p455w0rd"
    }

    Response body:
    {
        "access_token": "some jwt gobbldygook"
    }
    """
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    db_user = User.query.filter_by(email=email).first()
    if not db_user:
        return jsonify({"msg": "Bad email or password"}), 401

    if password != db_user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route("/users/active", methods=["GET"])
@jwt_required()
def read_current_user():
    email = get_jwt_identity()
    db_user = User.query.filter_by(email=email).first()
    return jsonify(db_user.serialize())


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# @api.route('/vendors', methods=['GET'])
# def get_vendors():
#     vendor_list = Vendor.query.all()
#     return jsonify([vendor.serialize() for vendor in vendor_list]), 200


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
        data: dict = request.json
        vendor = Vendor.query.get(vendor_id)
        if not vendor:
            return jsonify({"error": "Vendor not found"}), 404

        # vendor.service1 = data.get('service1', vendor.service1)
        # vendor.service2 = data.get('service2', vendor.service2)
        # vendor.name = data.get('name', vendor.name)
        # vendor.short_description = data.get('short_description', vendor.short_description)
        # vendor.long_description = data.get('long_description', vendor.long_description)
        # vendor.reviews = data.get('reviews', vendor.reviews)
        # vendor.price = data.get('price', vendor.price)
        # vendor.delivery_time = data.get('delivery_time', vendor.delivery_time)
        # vendor.top_rated = data.get('top_rated', vendor.top_rated)

        for key, value in data.items():
            if hasattr(vendor, key):
                setattr(vendor, key, value)

        db.session.commit()
        return jsonify(vendor.serialize()), 200
    except Exception as e:
        return jsonify({"error": "Unable to update vendor", "message": str(e)}), 400


@api.route("/vendors", methods=["GET"])
def get_ph_vendors():
    vendors = Vendor.query.all()
    serialized_vendors = [vendor.serialize() for vendor in vendors]
    return jsonify(serialized_vendors), 200
