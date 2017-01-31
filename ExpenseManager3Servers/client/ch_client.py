from flask import Flask
from hashRing import *
import httplib
import json, requests
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
    node1name = "n1"
    node2name = "n2"
    node3name = "n3"
    ch.__setitem__(node1name,node1url)
    ch.__setitem__(node2name,node2url)
    ch.__setitem__(node3name,node3url)
    return ch
   
def addExpenses(ch):
    nodes = {}
    for id in range(10):
        #getting hashed node
        nodes[id] = ch.__getitem__(str(id))
        print "POST node URL : ",nodes[id]
        req_body = {
            "id": id+1,
            "name" : "Foo " + str(id+1),
            "email" : "Foo" + str(id+1) + "@bar.com",
            "category" : "office supplies",
            "description" : "iPad for office use",
            "link" : "http://www.apple.com/shop/buy-ipad/ipad-pro",
            "estimated_costs" : "800",
            "submit_date" : "12-10-2016"
        }
        json_req = json.dumps(req_body)
        print "POST json_req", json_req 
        headers = {'Content-type': 'application/json'}
        connection = httplib.HTTPConnection(nodes[id])
        
        connection.request('POST', '/v1/expenses', json_req, headers)
        response = connection.getresponse()
        print "response : ", (response.read().decode())
    getExpenses(nodes)
        
def getExpenses(nodes):
    for id in nodes:
        url = 'http://' + str(nodes[id]) + '/v1/expenses/' + str(id+1)
        headers = {'Content-type': 'application/json'}
        data = requests.get(url=url, headers=headers)
        print "get : ", data
    
if __name__ == "__main__":
    ch = createHashRing()
    addExpenses(ch)
    app.run(debug=True,host='0.0.0.0', use_reloader=False)