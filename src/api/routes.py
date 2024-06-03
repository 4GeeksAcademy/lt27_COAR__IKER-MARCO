"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Craftmen, Category, Product, Admiin, Buyer, Order, OrderProduct
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

@api.route('/craftman/products', methods=['GET'])
@jwt_required()
def get_craftman_products():
    current_craftman_id = get_jwt_identity()
    products = Product.query.filter_by(craftman_id=current_craftman_id).all()
    products = [product.serialize() for product in products]
    return jsonify(products), 200

################################---------#############################
#################################CRUD PRODUCT#########################
@api.route('/craftman/orders', methods=['GET'])
@jwt_required()
def get_craftman_orders():
    current_craftman_id = get_jwt_identity()
    orders = Order.query.join(OrderProduct).join(Product).filter(Product.craftman_id == current_craftman_id).all()
    orders = [order.serialize() for order in orders]
    return jsonify(orders), 200


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
    category_id = request_body.get('category_id')
    category = Category.query.get(category_id)
    
    if category is None:
        return jsonify("Category not found"), 404
    
    product = Product(
        name=request_body["name"], 
        description=request_body["description"], 
        price=request_body["price"], 
        stock=request_body["stock"], 
        image=request_body["image"],
        craftman_id=request_body["craftman_id"],
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
    is_active = body.get("is_active",False)
    new_buyer = Buyer(name = body["name"], lastName = body["lastName"], email = body["email"], password = body["password"], address = body["address"], is_active = is_active)

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
        if 'is_active' in data:
            update_buyer.is_active = data['is_active']

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
    
    access_token = create_access_token(identity=craftmen.id)

    response = {
        "access_token": access_token,
        "craftman_id": craftmen.id,
        "address": craftmen.address
    }
    return jsonify(response)
################################# LOGIN_B ########################

@api.route('/login_b', methods=['POST'])
def login_b():

    username = request.json.get("username", None)
    password = request.json.get("password", None)
    oneBuyer = Buyer.query.filter_by(email = username).first()
    print(oneBuyer)
    print(oneBuyer.serialize())

    if oneBuyer is None or oneBuyer.password != password:
        return jsonify({"msg": "Bad username or password, estas en login_b"}), 401

    access_token = create_access_token(identity=oneBuyer.id)

    response = {
        "access_token": access_token,
        "buyer_id": oneBuyer.id,
        "address": oneBuyer.address 
    }

    return jsonify(response)

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

    access_token = create_access_token(identity=oneAdmin.id)
    return jsonify(access_token=access_token)
   
################################# ORDERS ############################################3

@api.route('/orders', methods=['GET'])
@jwt_required()
def get_orders():
    current_user_id = get_jwt_identity()
    orders = Order.query.filter_by(buyer_id=current_user_id).all()
    return jsonify([order.serialize() for order in orders]), 200

    
@api.route('/orders/new', methods=['POST'])
@jwt_required()
def create_order():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing JSON in request"}), 400

    required_fields = ['buyer_id', 'total_price', 'shipping_address', 'items']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    try:
        new_order = Order(
            buyer_id=data['buyer_id'],
            product_state='new',
            total_price=data['total_price'],
            shipping_address=data['shipping_address'],
            status="pending"
        )
        db.session.add(new_order)
        db.session.commit()

        for item in data['items']:
            if 'product_id' not in item or 'quantity' not in item or 'price' not in item:
                return jsonify({"error": "Missing fields in items"}), 400

            new_order_item = OrderProduct(
                order_id=new_order.id,
                product_id=item['product_id'],
                quantity=item['quantity'],  
                price=item['price']
            )
            db.session.add(new_order_item)

        db.session.commit()
        return jsonify(new_order.serialize()), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

@api.route('/orders/update/<int:id_order>', methods=['PUT'])
def updateOrder(id_order):
    updateOrder = Order.query.filter_by(id=id_order).first()

    if not updateOrder:
        response_body = {
            "msg": "Order don't exist"
        }
        return jsonify(response_body), 404
    
    data = request.get_json()

    if data:
        if  'buyer_id' in data:
            updateOrder.buyer_id = data['buyer_id']
        if 'product_state' in data:
            updateOrder.product_state = data['product_state']
        if 'status' in data: 
            updateOrder.status = data['status']

        db.session.commit()

        response_body = {
            "msg":"Order successfully updated",
            "order": updateOrder.serialize()
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"A order info is required to update."
        }
        return jsonify(response_body), 400
    
@api.route('/orders/delete/<int:id_order>', methods=['DELETE'])
def deleteOrder(id_order):
    orden = Order.query.filter_by(id=id_order).first()

    if orden:
        db.session.delete(orden)
        db.session.commit()

        response_body = {
            "msg":"orden successfully eliminated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"This orden does not exist"
        }
        return jsonify(response_body), 401
    
@api.route('/orders/<int:order_id>/status', methods=['PUT'])
@jwt_required()
def update_order_status(order_id):
    current_craftman_id = get_jwt_identity()
    order = Order.query.join(OrderProduct).join(Product).filter(
        Product.craftman_id == current_craftman_id,
        Order.id == order_id
    ).first()

    if not order:
        return jsonify({"msg": "Order not found or not authorized"}), 404

    request_body = request.get_json()
    new_status = request_body.get("status", None)

    if new_status:
        order.status = new_status
        db.session.commit()
        return jsonify({"msg": "Order status updated"}), 200

    return jsonify({"msg": "Invalid request"}), 400
    
########################## CRUD ORDER PRODUCT #################################################

@api.route('/orderProduct', methods=['GET'])
def getOrderProduct():
    allOrderProduct = OrderProduct.query.all()
    resp = list(map(lambda element: element.serialize(),allOrderProduct))

    return jsonify(resp), 200



@api.route('/orderProduct/<int:id_orderproduct>', methods=['GET'])
def getOneOrderProduct(id_orderproduct):
    oneOrderProduct = OrderProduct.query.filter_by(id = id_orderproduct).first()
    if oneOrderProduct == None:
        oneOrderProduct = {
            "msg": "Don't exist"
        }
        return jsonify(oneOrderProduct), 404
    else:
        return jsonify(oneOrderProduct.serialize()),200
    
@api.route('/orderProduct/new', methods=['POST'])
def newOrderProduct():
    body = request.get_json()

    required_fields = ["product_id", "order_id", "quantity"]
    for field in required_fields:
        if field not in body:
            return jsonify({"error": f"'{field}' is required"}), 400

    
    product = Product.query.get(body["product_id"])
    order = Order.query.get(body["order_id"])
    if product is None:
        return jsonify({"error": "Product not found"}), 404
    if order is None:
        return jsonify({"error": "Order not found"}), 404

    
    try:
        new_order_product = OrderProduct(
            product_id=body["product_id"],
            order_id=body["order_id"],
            quantity=body["quantity"]
        )
        db.session.add(new_order_product)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
 
    response_body = {
        "message": "New order product successfully added",
        "order_product": new_order_product.serialize()
    }

    return jsonify(response_body), 201

@api.route('/orderProduct/update/<int:id_orderp>', methods=['PUT'])
def updateOrderProduct(id_orderp):
    updateOrderProduct = OrderProduct.query.filter_by(id=id_orderp).first()

    if not updateOrderProduct:
        response_body = {
            "msg": "Order product don't exist"
        }
        return jsonify(response_body), 404
    
    data = request.get_json()

    if data:
        if  'product_id' in data:
            updateOrderProduct.product_id = data['product_id']
        if 'order_id' in data:
            updateOrderProduct.order_id = data['order_id']
        if  'quantity' in data:
            updateOrderProduct.quantity = data['quantity']

        db.session.commit()

        response_body = {
            "msg":"Order successfully updated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"A order info is required to update."
        }
        return jsonify(response_body), 400
    

@api.route('/orderProduct/delete/<int:id_orderp>', methods=['DELETE'])
def deleteOrderProduct(id_orderp):
    orden_product = OrderProduct.query.filter_by(id=id_orderp).first()

    if orden_product:
        db.session.delete(orden_product)
        db.session.commit()

        response_body = {
            "msg":"orden successfully eliminated"
        }
        return jsonify(response_body), 200
    else:
        response_body = {
            "msg":"This orden does not exist"
        }
        return jsonify(response_body), 401
