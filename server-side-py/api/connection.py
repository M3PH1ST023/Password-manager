from pymongo import MongoClient

mongo_client = MongoClient('mongodb+srv://adm1n1strat0r:YWRtMW4xc3RyYXQwcg%3D%3D@cluster0.hrutsox.mongodb.net/')
db = mongo_client['password-manager']
collectionCreds = db['Creds']
collectionUsers = db['Users']

def connectCreds():
    return collectionCreds

def connectUsers():
    return collectionUsers