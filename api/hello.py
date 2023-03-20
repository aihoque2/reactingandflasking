
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.forms import HelloForm
#from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", methods=['POST', 'GET'], defaults={'path': ''})
def index(path):
    form = HelloForm()
    form.from_json(request)
    return "hello lezzgeddit"

