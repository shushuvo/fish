const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile('index.html',{root:__dirname})
})
 
app.listen(process.env.PORT || 3000)
