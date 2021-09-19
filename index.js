const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:{origin: "*" }})

const mongoose = require("mongoose")

const DB = "mongodb+srv://hutum:_~z4FiRp_nTg6-4@cluster0.4bdzw.mongodb.net/fish?retryWrites=true&w=majority"
mongoose.connect(DB, function(err, db){console.log('database connected'); 
let info = db.collection('fish-users');
 
app.get('/', function (req, res) {
  res.sendFile('index.html',{root:__dirname})
})

server.listen(process.env.PORT || 3001, ()=> {
  console.log("server running...")
})

io.on('connection', (socket)=>{
  console.log("User connected:" + socket.id)

  socket.on('message', (data)=>{
    console.log(data);
    socket.broadcast.emit('message', data);
  })
 
   socket.on('register', (data)=>{
    let email = data.email;
    let name = data.name;
    let phone = data.phone;
  
    info.insert({address:email, name: name, phone:phone });

  })

})
   });                                    
                                      
 





