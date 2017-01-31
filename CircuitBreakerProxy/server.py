from flask import Flask
import socket
import select
import time
import sys
import redis
import itertools
import threading
import cb_ans
#--------------------------------------------------------------------------------------------
buffer_size = 4096
delay = 0.0001

socket.setdefaulttimeout(5)
#redis database connection
r = redis.StrictRedis(host='192.168.99.100', port=6379, db=0)

# List to store the application server address
forward_to = []

# list to store temperory application server address
List =[]
oldnodeSet = set()
#--------------------------------------------------------------------------------------------
def getPorts():
    global List
    global forward_to
    global oldnodeSet
    List = r.lrange("PortList", 0, -1)
    print("Available Servers : ", List)
    newSet = set(List)
    if(oldnodeSet != newSet):
        forward_to = []
        for L in List:
            address = ()
            address = address + ('127.0.0.1',L,)
            forward_to.append(address)
        oldnodeSet = newSet
    threading.Timer(20, getPorts).start()
#--------------------------------------------------------------------------------------------
class Forward:
    def __init__(self):
        self.forward = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def start(self, host, port):
        try:
            if port == 3001:
                connection = self.start1(host,port)
                return connection
            elif port == 3002:
                connection = self.start2(host,port)
                return connection
            else:
                connection = self.start3(host, port)
                return connection
        except Exception, e:
            print e

    @cb_ans.CircuitBreaker(name='3001', max_failure_to_open=3, reset_timeout=3)
    def start1(self,host, port):
        try:
            self.forward.connect((host, port))
            return self.forward
        except Exception, e:
            serverInfo = vars(cb_ans.G_CB_MAP[str(port)])
            #print ("The details of the app server running at "+ str(port)+" is")
            #print serverInfo
            fc = serverInfo["_failure_count"]
            if fc+1 >= 3:
                self.removeReddisEntry(port)
            raise Exception("CONNECTION FAILURE")

    @cb_ans.CircuitBreaker(name='3002', max_failure_to_open=3, reset_timeout=3)
    def start2(self,host, port):
        try:
            self.forward.connect((host, port))
            return self.forward
        except Exception, e:
            serverInfo = vars(cb_ans.G_CB_MAP[str(port)])
            fc = serverInfo["_failure_count"]
            if fc + 1 >= 3:
                self.removeReddisEntry(port)

            raise Exception("CONNECTION FAILURE")

    @cb_ans.CircuitBreaker(name='3003', max_failure_to_open=3, reset_timeout=3)
    def start3(self, host, port):
        try:
            self.forward.connect((host, port))
            return self.forward
        except Exception, e:
            serverInfo = vars(cb_ans.G_CB_MAP[str(port)])
            fc = serverInfo["_failure_count"]
            if fc + 1 >= 3:
                self.removeReddisEntry(port)
            raise Exception("CONNECTION FAILURE")

    def removeReddisEntry(self, port):
        global forward_to
        out_tup = [i for i in forward_to if i[1] != str(port)]
        forward_to = out_tup
        print out_tup
        print forward_to

    def deregister(self, port):
        cbInfo = vars(cb_ans.G_CB_MAP[str(port)])
        failure_count = cbInfo["_failure_count"]
        if failure_count+1 >= 3:
            r.lrem("PortList", 1, port)

class TheServer:
    input_list = []
    channel = {}

    def __init__(self, host, port):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.server.bind((host, port))
        self.server.listen(200)

    def main_loop(self):
        self.input_list.append(self.server)
        while 1:
            time.sleep(delay)
            ss = select.select
            inputready, outputready, exceptready = ss(self.input_list, [], [])
            for self.s in inputready:
                if self.s == self.server:
                    self.on_accept()
                    break

                self.data = self.s.recv(buffer_size)
                if len(self.data) == 0:
                    self.on_close()
                    break
                else:
                    self.on_recv()

    def on_accept(self):
        ip = forward_to[0][0]
        port = int(forward_to[0][1])
        forward = Forward().start(ip, port)
        entry = forward_to[0]
        del forward_to[0]
        forward_to.append(entry)

        clientsock, clientaddr = self.server.accept()

        if forward:
            self.input_list.append(clientsock)
            self.input_list.append(forward)
            self.channel[clientsock] = forward
            self.channel[forward] = clientsock

        else:
            clientsock.close()

    def on_close(self):
        #remove objects from input_list
        self.input_list.remove(self.s)
        self.input_list.remove(self.channel[self.s])
        out = self.channel[self.s]
        # close the connection with client
        self.channel[out].close()  # equivalent to do self.s.close()
        # close the connection with remote server
        self.channel[self.s].close()
        # delete both objects from channel dict
        del self.channel[out]
        del self.channel[self.s]

    def on_recv(self):
        data = self.data
        self.channel[self.s].send(data)

if __name__ == '__main__':
        server = TheServer('', 9090)
        r.lrem("PortList", 1, 3001)
        r.lrem("PortList", 1, 3002)
        r.lrem("PortList", 1, 3003)
        try:
            getPorts()
            server.main_loop()
        except KeyboardInterrupt:
            print "Ctrl C - Stopping server"
            sys.exit(1)
