
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from forms import HelloForm
#from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__)
CORS(app) # comment this on deployment
api = Api(app)

@app.route("/index")
def index():
    return {"state": "Success!", "message": "ligma"}

@app.route("/form", methods=['POST'])
def showForm():
    email = request.json['email']
    first_name = request.json['first_name']
    body = request.json['body']
    if (email and body):
        return {"status" : "SUCCESS", "message": "YOU ENTERED {}, {}, {}".format(country, farm, field)}
    else:
        return {"status": "FAIL", "message": "you did not properly enter the forms"}

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)

