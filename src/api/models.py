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


# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    # Relationships
    orders = db.relationship('Order', backref='user', lazy=True)
    reviews = db.relationship('Review', backref='user', lazy=True)


# Vendor Model
class Vendor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    years_of_experience = db.Column(db.Integer, nullable=False)
    top_rated = db.Column(db.Boolean, default=False)
    state_id = db.Column(db.Integer, db.ForeignKey('state.id'), nullable=True)
    # Relationships
    services = db.relationship(
        'Service', secondary='vendor_services', back_populates='vendors')
    reviews = db.relationship('Review', backref='vendor', lazy=True)


# Service Model
class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    minimum_price = db.Column(db.Float, nullable=False)
    maximum_price = db.Column(db.Float, nullable=False)
    # Relationship with Vendor through the association table
    vendors = db.relationship(
        'Vendor', secondary='vendor_services', back_populates='services')


# Association Table for Vendor-Service Many-to-Many Relationship
vendor_services = db.Table('vendor_services',
                           db.Column('vendor_id', db.Integer, db.ForeignKey(
                               'vendor.id'), primary_key=True),
                           db.Column('service_id', db.Integer, db.ForeignKey(
                               'service.id'), primary_key=True)
                           )

# State Model
class State(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    # Back reference from Vendor
    vendors = db.relationship('Vendor', backref='state', lazy=True)


# Order Model
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.String(120), nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    # Relationship to OrderItem
    items = db.relationship('OrderItem', backref='order', lazy=True)


# OrderItem Model
class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey(
        'service.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, default=1, nullable=False)
    # Relationship back to Order is defined in Order


# Review Model
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    vendor_id = db.Column(db.Integer, db.ForeignKey(
        'vendor.id'), nullable=False)
    # Relationship back to User and Vendor is defined in User and Vendor