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

####################################### START CRUD ENDPOINTS CATEGORY ##############################
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#################################CRUD CRAFTMEN#################################
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
@api.route('/category', methods=['GET'])
def all_category():
    category = Category.query.all()
    resp = list(map(lambda element: element.serialize(),category))

    if resp == None:
        response_body = {
            "msg":"no categories"
        }
        return jsonify(response_body),404
    else: return jsonify(resp),200
    

@api.route('/category/<int:category_id>', methods=['GET'])
def just_one_category(category_id):
    one_category = Category.query.filter_by(id = category_id).first()
    if one_category == None:
        one_category = {
            "msg":"This category does not exist"
        }
        return jsonify(one_category), 404

    else: return jsonify(one_category.serialize()), 200


@api.route('/category/new', methods=['POST'])
def new_category():
    new_name_category = request.get_json()["name"]
    New_Category = Category(name = new_name_category)

    db.session.add(New_Category)
    db.session.commit()

    response_body = {
        "message": "New category successfully added"
    }

    return jsonify(response_body), 200


@api.route('/category/delete/<int:id_category>', methods=['DELETE'])
def delete_category(id_category):
    category = Category.query.filter_by(id=id_category).first()

    if category:
        db.session.delete(category)
        db.session.commit()

        response_body = {
            "msg":"Category successfully eliminated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"This category does not exist"
        }
        return jsonify(response_body), 401
    

@api.route('/category/update/<int:id_category>', methods=['PUT'])
def update_category(id_category):
    category = Category.query.filter_by(id=id_category).first()

    if not category:
        response_body = {
            "msg": "don't exist"
        }
        return jsonify(response_body), 404
    

    new_name = request.get_json().get("name")

    if new_name:
        category.name = new_name
        db.session.commit()

        response_body = {
            "msg":"Category successfully updated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"A new category name is required to update."
        }
        return jsonify(response_body), 400
    


############################# END ############################################       
