var express = require('express')
var app = express()

/* // The code below will display 'Hello World How is it going!' to the browser when you go to */ 



app.get('/', function (req, res) {
  res.send('Hello World!') 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;