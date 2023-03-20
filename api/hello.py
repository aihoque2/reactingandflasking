
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from forms import HelloForm
#from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__)
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/index")
def index():
    return {"state": "Success!", "message": "ligma"}

@app.route("/form", methods=['POST'])
def showForm():
    form = HelloForm()
    

    
# Running app
if __name__ == '__main__':
    app.run(debug=True)

