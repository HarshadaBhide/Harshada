from flask import Flask
from hashRing import *
import httplib
import json
from flask import request
from flask import jsonify

app = Flask(__name__)
 
@app.route("/")
def hello():
    return "Hello Harshada!"
    
def createHashRing():
    ch = ConsistentHashRing()
    node1url = "192.168.99.100:3000"
    node2url = "192.168.99.100:3001"
    node3url = "192.168.99.100:3002"
    node1name = "node1"
    node2name = "node2"
    node3name = "node3"
    ch.__setitem__(node1name,node1url)
    ch.__setitem__(node2name,node2url)
    ch.__setitem__(node3name,node3url)
    return ch

def acceptUserInput():
    while 1:
        #accepting user input
        id = raw_input("Enter id : ")
        name = raw_input("Enter name : ")
        email = raw_input("Enter email : ")
        category = raw_input("Enter category : ")
        link = raw_input("Enter link : ")
        description = raw_input("Enter description : ")
        estimated_costs = raw_input("Enter estimated_costs : ")
        submit_date = raw_input("Enter submit_date : ")
        req_body = {
            "id": int(id),
            "name": str(name),
            "email": str(email),
            "category": str(category),
            "link": str(link),
            "description": str(description),
            "estimated_costs": str(estimated_costs),
            "submit_date": str(submit_date)
        }
        
        json_req = json.dumps(req_body)
        print json_req
        #getting hashed node
        nodeUrl = ch.__getitem__(id)
        connection = httplib.HTTPConnection(nodeUrl)
        headers = {'Content-type': 'application/json'}
        connection.request('POST', '/v1/expenses', json_req, headers)
        response = connection.getresponse()
        print(response.read().decode())
        
        
    
ch = createHashRing()        

@app.route('/expenseHash', methods=['POST'])
def addExpense():
    object = json.loads(request.data)
    req_body = {
        "id": object['id'],
        "name": object['name'],
        "email": object['email'],
        "category": object['category'],
        "link": object['link'],
        "description": object['description'],
        "estimated_costs": object['estimated_costs'],
        "submit_date": object['submit_date']
    }
    
    json_req = json.dumps(req_body)
    print json_req
    #getting hashed node
    nodeUrl = ch.__getitem__(object['id'])
    print nodeUrl
    connection = httplib.HTTPConnection(nodeUrl)
    headers = {'Content-type': 'application/json'}
    connection.request('POST', '/v1/expenses', json_req, headers)
    response = connection.getresponse()
    print(response.read().decode())
    resp = jsonify(response.read().decode())
    return resp
    
if __name__ == "__main__":
    #global ch = createHashRing()
    app.run(debug=True,host='0.0.0.0')