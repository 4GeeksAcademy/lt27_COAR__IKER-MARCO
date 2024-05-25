"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Craftmen, Category, Product, Admiin, Buyer
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate


app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret 1 2 3" # Change this!
jwt = JWTManager(app)

#########################################
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

####################################### USERS ##############################
@api.route('/user', methods=['GET'])
#@jwt_required()

def get_user():
    user = User.query.all()
    user = list(map(lambda x: x.serialize(), user))

    return jsonify(user), 200


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

@api.route('/product/new/', methods=['POST'])
def create_product():
    request_body = request.get_json()
    category = Category.query.get(category_id)
    if category is None:
        return jsonify("Category not found"), 404
    product = Product(
        name=request_body["name"], 
        description=request_body["description"], 
        price=request_body["price"], 
        stock=request_body["stock"], 
        image=request_body["image"],
        category_id=category_id)
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

############################### CRUD CATEGORY ##################################
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
    

################################# SIGNUP ########################

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    print(user)
    if user == None:
        user = User(email=body["email"], password=body["password"], is_active=True)
        db.session.add(user)
        db.session.commit()
        response_body = {
            "msg": "User created"
        }
        return jsonify(response_body), 200
    else:
        return jsonify({"msg": "user already exist"}), 401


################################# PROTECTED ########################

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
############################# END ############################################       


######################## START CRUD ADMINN ##################################
@api.route('/admin', methods=['GET'])
def getAdmin():
    admin = Admiin.query.all()
    resp = list(map(lambda element: element.serialize(),admin))

    return jsonify(resp), 200

@api.route('/admin/<int:id_admin>', methods=['GET'])
def getOneAdmin(id_admin):
    oneAdmin = Admiin.query.filter_by(id = id_admin).first()
    if oneAdmin == None:
        oneAdmin = {
            "msg": "No existe ese Admin"
        }
        return jsonify(oneAdmin), 404
    else:
        return jsonify(oneAdmin.serialize()),200
    
@api.route('/admin/new', methods=['POST'])
def newAdmin():
    body = request.get_json()
    new_admin = Admiin(name = body["name"], lastName = body["lastName"], email = body["email"], password = body["password"])

    db.session.add(new_admin)
    db.session.commit()

    response_body = {
        "message": "New Admin successfully added"
    }

    return jsonify(response_body), 200

@api.route('/admin/update/<int:id_admin>', methods=['PUT'])
def updateAdmin(id_admin):
    update_admin = Admiin.query.filter_by(id=id_admin).first()

    if not update_admin:
        response_body = {
            "msg": "Admin don't exist"
        }
        return jsonify(response_body), 404
    
    data = request.get_json()

    if data:
        if  'name' in data:
            update_admin.name = data['name']
        if 'lastName' in data:
            update_admin.lastName = data['lastName']
        if 'email' in data:
            update_admin.email = data['email']
        if 'password' in data:
            update_admin.password = data['password']

        db.session.commit()

        response_body = {
            "msg":"Admin successfully updated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"A update Admin info is required to update."
        }
        return jsonify(response_body), 400


@api.route('/admin/delete/<int:id_admin>', methods=['DELETE'])
def deleteAdmin(id_admin):
    Admin = Admiin.query.filter_by(id=id_admin).first()

    if Admin:
        db.session.delete(Admin)
        db.session.commit()

        response_body = {
            "msg":"Admin successfully eliminated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"This Admin does not exist"
        }
        return jsonify(response_body), 401

################################## CRUD BUYER ####################################

@api.route('/buyer', methods=['GET'])
#@jwt_required()
def getBuyer():
    buyer = Buyer.query.all()
    resp = list(map(lambda element: element.serialize(),buyer))

    return jsonify(resp), 200

@api.route('/buyer/<int:id_buyer>', methods=['GET'])
def getOneBuyer(id_buyer):
    oneBuyer = Buyer.query.filter_by(id = id_buyer).first()
    if oneBuyer == None:
        oneBuyer = {
            "msg": "Don't exist"
        }
        return jsonify(oneBuyer), 404
    else:
        return jsonify(oneBuyer.serialize()),200
    
@api.route('/buyer/new', methods=['POST'])
def newBuyer():
    body = request.get_json()
    new_buyer = Buyer(name = body["name"], lastName = body["lastName"], email = body["email"], password = body["password"], address = body["address"])

    db.session.add(new_buyer)
    db.session.commit()

    response_body = {
        "message": "New buyer successfully added"
    }

    return jsonify(response_body), 200

@api.route('/buyer/update/<int:id_buyer>', methods=['PUT'])
def updateBuyer(id_buyer):
    update_buyer = Buyer.query.filter_by(id=id_buyer).first()

    if not update_buyer:
        response_body = {
            "msg": "buyer don't exist"
        }
        return jsonify(response_body), 404
    
    data = request.get_json()

    if data:
        if  'name' in data:
            update_buyer.name = data['name']
        if 'lastName' in data:
            update_buyer.lastName = data['lastName']
        if 'email' in data:
            update_buyer.email = data['email']
        if 'password' in data:
            update_buyer.password = data['password']
        if 'address' in data:
            update_buyer.address = data['address']

        db.session.commit()

        response_body = {
            "msg":"Buyer successfully updated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"A update Buyer info is required to update."
        }
        return jsonify(response_body), 400
    
@api.route('/buyer/delete/<int:id_buyer>', methods=['DELETE'])
def deleteBuyer(id_buyer):
    Buye = Buyer.query.filter_by(id=id_buyer).first()

    if Buye:
        db.session.delete(Buye)
        db.session.commit()

        response_body = {
            "msg":"Buyer successfully eliminated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"This Buyer does not exist"
        }
        return jsonify(response_body), 401
    
################################# LOGIN_C ########################

@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    craftmen = Craftmen.query.filter_by(email=username).first()
    print(craftmen)
    print(craftmen.serialize()) 

    if craftmen.password != password:
        return jsonify({"msg": "Bad username or password, estas en login_C"}), 401
    
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)
################################# LOGIN_B ########################

@api.route('/login_b', methods=['POST'])
def login_b():

    username = request.json.get("username", None)
    password = request.json.get("password", None)
    oneBuyer = Buyer.query.filter_by(email = username).first()
    print(oneBuyer)
    print(oneBuyer.serialize())

    if oneBuyer.password != password:
        return jsonify({"msg": "Bad username or password, estas en login_b"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

################################# LOGIN_A ########################

@api.route('/login_a', methods=['POST'])
def login_a():

    username = request.json.get("username", None)
    password = request.json.get("password", None)
    oneAdmin = Admiin.query.filter_by(email = username).first()
    print(oneAdmin)
    print(oneAdmin.serialize())

    if oneAdmin.password != password:
        return jsonify({"msg": "Bad username or password, estas en login_a"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)
   

