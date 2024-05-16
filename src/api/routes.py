"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Craftmen
from api.models import db, User, Category
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#################################CRUD CRAFTMEN########################
@api.route('/craftmen', methods=['GET'])
def get_craftmen():
    craftmen = Craftmen.query.all()
    craftmen = list(map(lambda x: x.serialize(), craftmen))

    return jsonify(craftmen), 200

@api.route('/craftmen/<int:id>', methods=['GET'])
def get_craftmen_by_id(id):
    craftmen = Craftmen.query.get(id)
    craftmen = craftmen.serialize()

    return jsonify(craftmen), 200

@api.route('/craftmen', methods=['POST'])
def create_craftmen():
    request_body = request.get_json()
    craftmen = Craftmen(name=request_body["name"], last_name=request_body["last_name"], email=request_body["email"], password=request_body["password"], phone=request_body["phone"], address=request_body["address"], city=request_body["city"], state=request_body["state"], zip_code=request_body["zip_code"], is_active=request_body["is_active"])
    db.session.add(craftmen)
    db.session.commit()
    return jsonify("Craftmen created"), 200

@api.route('/craftmen/<int:id>', methods=['PUT'])
def update_craftmen(id):
    craftmen = Craftmen.query.get(id)
    request_body = request.get_json()
    craftmen.name = request_body["name"]
    craftmen.last_name = request_body["last_name"]
    craftmen.email = request_body["email"]
    craftmen.password = request_body["password"]
    craftmen.phone = request_body["phone"]
    craftmen.address = request_body["address"]
    craftmen.city = request_body["city"]
    craftmen.state = request_body["state"]
    craftmen.zip_code = request_body["zip_code"]
    craftmen.is_active = request_body["is_active"]
    db.session.commit()
    return jsonify("Craftmen updated"), 200

@api.route('/craftmen/<int:id>', methods=['DELETE'])
def delete_craftmen(id):
    craftmen = Craftmen.query.get(id)
    db.session.delete(craftmen)
    db.session.commit()
    return jsonify("Craftmen deleted"), 200

################################---------#############################
#################################CRUD PRODUCT#########################
@api.route('/product', methods=['GET'])
def get_product():
    product = Product.query.all()
    product = list(map(lambda x: x.serialize(), product))

    return jsonify(product), 200

@api.route('/product/<int:id>', methods=['GET'])
def get_product_by_id(id):
    product = Product.query.get(id)
    product = product.serialize()

    return jsonify(product), 200

@api.route('/product', methods=['POST'])
def create_product():
    request_body = request.get_json()
    product = Product(name=request_body["name"], description=request_body["description"], price=request_body["price"], stock=request_body["stock"], image=request_body["image"])
    db.session.add(product)
    db.session.commit()
    return jsonify("Product created"), 200

@api.route('/product/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)
    request_body = request.get_json()
    product.name = request_body["name"]
    product.description = request_body["description"]
    product.price = request_body["price"]
    product.stock = request_body["stock"]
    product.image = request_body["image"]
    db.session.commit()
    return jsonify("Product updated"), 200

@api.route('/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)
    db.session.delete(product)
    db.session.commit()
    return jsonify("Product deleted"), 200

################################---------#############################


@api.route('/category', methods=['GET'])
def all_category():
    category = Category.query.all()
    resp = list(map(lambda element: element.serialize(),category))

    if resp == None:
        response_body = {
            "msg":"no categories"
        }
        return jsonify(response_body),404
    else:
        resp
        return jsonify(resp),200
    

# @api.route('/category/new', methods=['POST'])
# def new_category():
    

#     return jsonify(response_body), 200
