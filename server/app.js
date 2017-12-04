const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const User           = require('./models/user');
const config	     = require('./config/config');
const jwt 			 = require('jsonwebtoken');
const bcrypt 		 = require('bcryptjs');


let app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/lms');
app.set('superSecret', config.secret);
let db = mongoose.connection;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Settin up routes
app.get('/', (req, res) => { // Route for homepage
	res.send('Please use the <code>/api/books</code> end point. Excited!!');
}
);

// Get all users.
app.get('/api/users', (req, res) => {

	// Post the query.
	User.getUsers((err, users) => {
		if(err) { // If error
			console.log(err);
		}
		res.json(users); // Show result.
	});
});

// Add new user.
app.post('/api/users', (req, res) => {

	// Get user data.
	let userObj = req.body;

	// Call query.
	User.addUser(userObj, (err, user) => {
		if(err) { // If error.
			console.log(err);
		}
		res.json(user); // Show result in Json.
	});

});

// Update user.
app.put('/api/users/:id', (req, res) => {

	// Id of the user to be updated.
	let id = req.params.id;

	// Get user data.
	let userObj = req.body;

	// Check
	console.log(id);
	console.log(userObj);

	// Call query.
	User.updateUser( id, userObj, {}, (err, user) => {
		if(err) { // If error.
			console.log(err);
		}
		res.json(user); // Show result in Json.
	});

});


// Remove user.
app.delete('/api/users/:id', (req, res) => {

	// Get the id.
	let id = req.params.id;

	// Call query.
	User.removeUser( id, (err, user) => {
		if(err){ // If error.
			console.log(err);
		}
		res.json(user);
	});

});

// Login user.
app.post('/api/users/authenticate', (req, res) => {

	// Access user name and password.
	let userObj = req.body;

	// Call query.
	User.login( userObj, (err, user) => {
		if(err){ //If error.
			console.log(err);
		} else if (!user) {
			// If email is not right.
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) { // If user exists.
			// If password is not right.
			let passwordIsValid = bcrypt.compareSync(userObj.password, user.password);
			if (! passwordIsValid) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else { // User found & Password is correct.
				const payload = { id: user._id };
				console.log(payload);
				console.log(typeof(payload));
				var token = jwt.sign(payload, app.get('superSecret'), {
				expiresIn: '24h' // expires in 24 hours
        		});

        		res.json({
		          success: true,
		          message: 'Enjoy your token!',
		          token: token
		        });
			}
		}
	});

});


// Get Details of the User
app.get('/api/users/detail', (req, res) => {
	let token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	let decodedId = '';

	jwt.verify(token, app.get('superSecret'), function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
	decodedId = decoded;
	});

	console.log(decodedId);

	User.getUserDetail( decodedId.id, (err, user) => {
		if(err){ // If error.
			console.log(err);
		}
		res.json(user);
	});




});



// Listen at port 3002.
app.listen(3002);
console.log('Running on Port 3000...');



