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
            "category": self.category.name
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
    __tablename__='buyers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastName = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    orders = db.relationship('Order', back_populates='buyer', lazy='dynamic')
   
    def __repr__(self):
        return f'<Buyer {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            "address": self.address,
            "password": self.password, # this is never serialized
            "is_active": self.is_active

        }

class Order(db.Model):
    __tablename__='orders'
    id = db.Column(db.Integer, primary_key=True)
    buyer_id = db.Column(db.Integer, db.ForeignKey('buyers.id'), nullable=False)
    product_state = db.Column(db.String(120), nullable=False)

    buyer = db.relationship('Buyer', back_populates='orders')
   
    def __repr__(self):
        return f'<Orders {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "buyer_id": self.buyer_id,
            "product_state": self.product_state
        }
