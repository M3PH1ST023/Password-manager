from flask import Flask, jsonify, request
from connection import connectCreds
from bson.objectid import ObjectId

# POST adds credential for specific user
def addCreds():
    try:
        data = request.json
        connectCreds().insert_one(data)
        return "success"
    except Exception as e:
        Error(e)

# GET all users credentials
def getCreds():
    try:
        data = []
        for doc in connectCreds().find():
            data.append({
                'userId':doc['userId'],
                'credId':doc['credId'],
                'userName':doc['userName'],
                'userPass':doc['userPass'],
                'userEmail':doc['userEmail'],
                'url':doc['url'],
                'comments':doc['comments']
            })
        return jsonify(data)
    except Exception as e:
        Error(e)

# GET credential of specific user
def getCredById():
    try:
        param = request.args.get('userId')
        data = []
        for doc in connectCreds().find({'userId':int(param)}):
            data.append({
                'userId':doc['userId'],
                'credId':doc['credId'],
                'userName':doc['userName'],
                'userPass':doc['userPass'],
                'userEmail':doc['userEmail'],
                'url':doc['url'],
                'comments':doc['comments']
            })
        return jsonify(data)
    except Exception as e:
        Error(e)

# DELETE specific crdential with credId
def deleteCredById():
    try:
        param = request.args.get('credId')
        result = connectCreds().delete_one({'credId':int(param)})
        if result.deleted_count == 0:
            return "No creds to delete"
        return "success"
    except Exception as e:
        Error(e)

# Returns the error message as json
def Error(e):
    return jsonify({
        'error':str(e)
    })