# Chat Node

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Simple Node js chat application and API.

  - API to CRUD users,messages and chats
  - Websockets implemented
  - Dockerfile ready to build docker image

# Coming Features!

  - UI to create users
  - Save messages to DB through Web socket interface




### Installation

Requires [Node.js](https://nodejs.org/) to run.

Clone the repo 
Install the dependencies.

```sh
$ git clone https://github.com/RubDevs/ChatNode.git
$ cd ChatNode
$ npm install 
```
In order to see it in action you must create an MongoDB Atlas account if not have one already (free tier works fine) and create a DB cluster, follow every step given by Mongo Atlas to achieve it.

Once created get the connection string by pressing to connect button in your cluster  ![connect](/assets/mongoatlas.png)  

Then choose native drivers option  ![drivers](/assets/mongoatlas0.png)  

Finally copy the connection string given and replace the parameters <password> and <DBname>  ![string](/assets/mongoatlas1.png)  

Now add to ChatNode root a file called .env with following content:
```
DB_DEVELOPMENT=<the string connection you copied>
```
Now everything is ready, just run the server.
```
$ node server
```

### Docker
Chat Node is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3000. When ready, simply use the Dockerfile to build the image.

```sh
cd ChatNode
docker build -t <yourDockerHubUser>/chat_node:1.1 .
```
This will create the ChatNode image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host.(if want to test WebSocket chosse 3000 also, if only want to try API choose on your preference) In this example, we simply map port 3000 of the host to port 3000 of the Docker:

```sh
docker run -d -p 3000:3000  <yourDockerHubuser>/chat_node:1.1
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:3000/app/socket.html
```
if you open 2 or more different windows you'll see the messages written in all windows.

You can also verify the API with Postman.
a POST to
```
localhost:3000/user
```
with the following body
```
{
    "name": "Dominic"
}
```
Will create a user named Dominic in the DB. The response contains the user id generated, you can used to modify or delete the user.

A GET to the same address will return every user in DB.

a POST to 
```
localhost:3000/chat
```
with the following body
```
{
    "users":[
             "ID_OF_A_USER",
             "ID_OF_ANOTHER_USER"
    ]
}
```
Will create a chat room with the users in the array.

And finally you can see interaction between API and WebSocket doing the following.
POST TO 
```
localhost:3000/message
```
and body
```
{
    "chat": "chat_id"
    "user":"user_id",
    "message":"Any message"
}
```
You'll see the message in DB but it will also appear into WebSocket Chat. 
### Todos

 - Write Tests
 - Create UI 

License
----

MIT
