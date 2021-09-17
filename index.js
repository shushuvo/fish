const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:{origin: "*" }})
 
app.get('/', function (req, res) {
  res.sendFile('index.html',{root:__dirname})
})

io.on('connection', (socket)=>{
  console.log("User connected:" + socket.id)

  socket.on('message', (data)=>{
    console.log(data);
    socket.broadcast.emit('message', data);
  })

})


app.listen(process.env.PORT || 5000)
 





