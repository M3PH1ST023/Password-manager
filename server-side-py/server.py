from flask import Flask

import sys
sys.path.append('api')
from Creds import *
from Users import *

app = Flask(__name__)

#### Routes ####

app.route('/api/v1/addCreds', methods=['POST'])(addCreds)
app.route('/api/v1/getCreds', methods=['GET'])(getCreds)
app.route('/api/v1/getCredsById', methods=['GET'])(getCredById)
app.route('/api/v1/deleteCredById', methods=['DELETE'])(deleteCredById)

app.route('/api/v1/addUser', methods=['POST'])(addUser)
app.route('/api/v1/getUser', methods=['GET'])(getUser)
app.route('/api/v1/getUserById', methods=['GET'])(getUserById)
app.route('/api/v1/deleteUserById', methods=['DELETE'])(deleteUserById)

#### Routes ####

if __name__ == '__main__':
    app.run()