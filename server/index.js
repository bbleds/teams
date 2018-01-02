// main server config file

const express = require('express')
const bodyParser = require('body-parser')

// init app
const app = express()
const port = 3000

// configure public static files
app.use(express.static(__dirname+'/../client/dist'))

// require our application routes and pass in our instance of express
const routes = require('./routes')(app, {})

// spin it up
app.listen(port, () => {
	console.log('listening on port', port);
})
