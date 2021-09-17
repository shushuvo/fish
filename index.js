const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = module.exports.io = require('socket.io')(server)
 
app.get('/', function (req, res) {
  res.sendFile('index.html',{root:__dirname})
})
 
server.listen(3001, ()=> {
})




