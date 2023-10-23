from flask import Flask, jsonify, request
from connection import connectUsers

# POST adds credential for specific user
@cross_origin(origin="http://127.0.0.1:3000")
def addUser():
    try:
        data = request.json
        connectUsers().insert_one(data)
        return "success"
    except Exception as e:
        Error(e)

# GET all users Details
@cross_origin(origin="http://127.0.0.1:3000")
def getUser():
    try:
        data = []
        for doc in connectUsers().find():
            data.append({
                'userId':doc['userId'],
                'userName':doc['userName'],
                'userPass':doc['userPass'],
                'userEmail':doc['userEmail']
            })
        return jsonify(data)
    except Exception as e:
        Error(e)

# GET details of specific user
@cross_origin(origin="http://127.0.0.1:3000")
def getUserById():
    try:
        param = request.args.get('userId')
        data = []
        for doc in connectUsers().find({'userId':int(param)}):
            data.append({
                'userId':doc['userId'],
                'userName':doc['userName'],
                'userPass':doc['userPass'],
                'userEmail':doc['userEmail']
            })
        return jsonify(data)
    except Exception as e:
        Error(e)

# PUT the mentioned user detail
@cross_origin(origin="http://127.0.0.1:3000")
def putUser():
    try:
        data = request.get_json()
        userId = data['userId']
        existing = connectUsers().find_one({'userId':int(userId)})
        connectUsers().update_one({'userId':int(userId)}, {'$set':data})
        return "success"
    except Exception as e:
        Error(e)

# DELETE specific user
@cross_origin(origin="http://127.0.0.1:3000")
def deleteUserById():
    try:
        param = request.args.get('userId')
        result = connectUsers().delete_one({'userId':int(param)})
        if result.deleted_count == 0:
            return "No users to delete"
        return "success"
    except Exception as e:
        Error(e)

# Returns the error message as json
def Error(e):
    return jsonify({
        'error':str(e)
    })