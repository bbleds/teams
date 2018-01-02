// will hold our final compilation of routes

const path = require('path')

module.exports = function(app, db){

	// Home route -- this will be configured differently in production, but for now, we will just send html file
	app.get('/', (req, res) => res.sendFile(path.join('/index.html')) )

	// Default route
	app.get('*', (req, res) => res.redirect('/') )

}
