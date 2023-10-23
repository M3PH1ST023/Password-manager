from flask import Flask
from flask_cors import CORS
import sys
sys.path.append('api')
from Creds import *
from Users import *

app = Flask(__name__)
CORS(app, origins="http://127.0.0.1:3000")
app.config['CORS_HEADER']='Content-Type'

#### Routes ####

app.route('/api/v1/addCreds', methods=['POST'])(addCreds)
app.route('/api/v1/getCreds', methods=['GET'])(getCreds)
app.route('/api/v1/getCredsById', methods=['GET'])(getCredById)
app.route('/api/v1/updateCred', methods=['PUT'])(putCreds)
app.route('/api/v1/deleteCredById', methods=['DELETE'])(deleteCredById)

app.route('/api/v1/addUser', methods=['POST'])(addUser)
app.route('/api/v1/getUser', methods=['GET'])(getUser)
app.route('/api/v1/getUserById', methods=['GET'])(getUserById)
app.route('/api/v1/updateUser', methods=['PUT'])(putUser)
app.route('/api/v1/deleteUserById', methods=['DELETE'])(deleteUserById)

#### Routes ####

if __name__ == '__main__':
    app.run(port=5000)