var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
  // router

var PORT = process.env.PORT || 3000
var mongoConnectionString = process.env.MONGO_URL

mongoose.connect(process.env.MONGO_URL, function(err) {
  if(err) return console.log('Cannot connect to Mongo')
  console.log('Connected to MongoDB. WOOOO!')
})

app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(PORT, function() {
  console.log("Server running on port: ", PORT)
})
