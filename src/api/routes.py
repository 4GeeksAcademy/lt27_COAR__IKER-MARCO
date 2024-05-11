"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
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
