from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

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
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }
##################### MODEL CRAFTMEN  ####################################    

class Craftmen(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    state = db.Column(db.String(120), unique=False, nullable=False)
    zip_code = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def __repr__(self):
        return f'<Craftmen {self.name}>'
   
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "password": self.password, # this is never serialized
            "phone": self.phone,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }
    

##################### MODEL PRODUCT ####################################    
      
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float(), nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(120), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    category = db.relationship('Category', backref=db.backref('products', lazy=True))

    craftman_id = db.Column(db.Integer, db.ForeignKey('craftmen.id')) 
    craftman = db.relationship('Craftmen', backref=db.backref('products', lazy=True))

    order_product = db.relationship('OrderProduct', back_populates='product')

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "stock": self.stock,
            "image": self.image,
            "category": self.category.name,
            "craftman_id": self.craftman_id
        }
##################### MODEL CATEGORY ####################################        
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
   
    def __repr__(self):
        return f'<Category {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
    
##################### MODEL ADMIN ###################################################################
class Admiin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastName = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
   
    def __repr__(self):
        return f'<Admiin {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email
        }

#################### MODEL BUYER ##################################################

class Buyer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastName = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    order = db.relationship('Order', back_populates='buyer', lazy='dynamic')

    def __repr__(self):
        return f'<Buyer {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            "address": self.address,
            "is_active": self.is_active

        }
    
######################### MODEL ORDERS ######################################

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    buyer_id = db.Column(db.Integer, db.ForeignKey('buyer.id'), nullable=False)
    product_state = db.Column(db.String(120), nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), nullable=False, default='pending')
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    shipping_address = db.Column(db.String(250), nullable=False)

    buyer = db.relationship('Buyer', back_populates='order')
    orderProduct = db.relationship('OrderProduct', back_populates='order')
   
    def __repr__(self):
        return f'<Order {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "buyer_id": self.buyer_id,
            "product_state": self.product_state,
            "total_price": self.total_price,
            "status": self.status,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "shipping_address": self.shipping_address,
            "orderProduct": [item.serialize() for item in self.orderProduct]
        }
        
    
############################ MODEL ORDERSPRODUCT #####################################

class OrderProduct(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer)


    product = db.relationship('Product', back_populates='order_product')
    order = db.relationship('Order', back_populates='orderProduct')
   
    def __repr__(self):
        return f'<OrderProduct {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "order_id": self.order_id,
            "price": self.price,
            "quantity": self.quantity,
            "product": self.product.serialize()
        }