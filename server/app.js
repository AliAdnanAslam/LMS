const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const User           = require('./models/user');
const config	     = require('./config/config');
const jwt 			 = require('jsonwebtoken');
const bcrypt 		 = require('bcryptjs');
const Book			 = require('./models/book');
const DonateBooks 	 = require('./models/donateBook');
const Order			 = require('./models/order');
const Emailer 		 = require('./utils/email/emailTransporter.js');

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

	// Check if user already exists.
	User.searchByEmail(userObj.email, (err, user) => {
		if(err) { // Error in API Call.
			res.json ({success: false, message: 'An Error Occurred While Calling API.'});
		} else {
			if (user) { // If user exists
				res.json({success: false, message: 'User with this email already exists!'});
			} if (!user) { // If user does not exists.
				User.addUser(userObj, (err, user) => {
				if(err) { // If error.
					console.log(err);
				}
				res.json(user); // Show result in Json.
				});
			}
		}
	})


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

// Search user by id
app.get('/api/users/:id', (req, res) => {
	let userId = req.params.id;

	User.searchUserById( userId, (err, user) => {
		if (err) {
			console.log(err);
		} else {
			res.json(user);
		}
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

	console.log(userObj);
	// Call query.
	User.login( userObj, (err, user) => {

		if(err){ //If error.
			console.log(err);
		} else if (!user) {

			// If email is not right.
			res.json({ success: false, message: 'Authentication failed. User not found.' });

		} else if (user) { // If user exists.
			console.log("User exists");
			// If password is not right.
			let passwordIsValid = false ;
			try {
				console.log(userObj.password);
				passwordIsValid	 = bcrypt.compareSync(userObj.password, user.password);
			} catch (e) {
				console.log(e.message);
			}


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



app.get('/api/books', (req, res) => {
	Book.getAllBooks((err,books) =>{
		if(err) {
			console.log(err);
		} else {
			res.json(books);
		}
	});
});


// Add new book.
app.post('/api/books/donate', (req, res) => {

	// Get user data.
	let newBook = req.body;

	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;

	console.log(newBook);

	Book.findBook(newBook, (err, book) => {
		if(err){
			console.log(err);
		} else if (book != null) {

			let bookId = book._id;

			DonateBooks.addBook (
				{ bookId, userId, status: newBook.status }, (err, _res) => {
					if (err){
						console.log(err)
					} else {
						res.json(_res);
					}
				} );
		} else {
			Book.addBook( newBook, (err, book) => {
				if(err) {
					console.log(err);
				} else {
					bookId = book._id;
					DonateBooks.addBook (
					{ bookId, userId, status: newBook.status }, (err, _res) => {
						if (err){
							console.log(err)
						} else {
							res.json(_res);
						}
					} );
				}
			} )
		}
	})
});



// Search book by id
app.get('/api/books/:id', (req, res) => {
	let bookId = req.params.id;
	console.log(typeof(bookId));
	Book.searchBookById( bookId, (err, book) => {
		if (err) {
			console.log(err);
		} else {
			res.json(book);
		}
	});

});


// Get all donated books.
app.get('/api/donatedBooks', (req, res) => {
	// Post the query.
	DonateBooks.getDonatedBooks((err, books) => {
		if(err) { // If error
			console.log(err);
		}
		console.log(books);
		res.json(books); // Show result.
	});
});


// Create new order
app.post(('/api/orders/new'), (req, res) => {
	let loginToken = AuthCheck(req,res);
	let userId = loginToken.id;
	let type = req.body.type;

	Order.add( {
		userId:userId,
		type:type,
	},
		(err, order) => {
		if(err){
			console.log(err);
		} else {
			res.json(order);
		}
	});

});


// Get all orders
app.get('/api/orders', (req, res) => {

	let loginToken = AuthCheck(req,res);

	Order.getAllOrders((err, orders) => {
		if (err) {
			console.log(err);
		}
		res.json(orders);
	});
});


app.put('/api/forgetPassword', (req,res) => {


	// Check if request body exists.
	if(!req.body) return res.status(400).json({message: 'No Request Body'});
	if(!req.body.email) return res.status(400).json({message: 'No email id'});

	// Email of the user.
	let email = req.body.email;

	// Time to get the user id.
	User.searchByEmail( email, (err, user) => {
		if(err) {
			console.log(err);
		} else { // If user exists.
			if(!user) return res.json ( { success: false, message: "No User with this email exists" });
			User.addResetToken(user.toObject(), {}, (err, updatedUser) => {
				if(err){
					console.log(err);
				} else {
					//updatedUser = updatedUser.toObject();
					const mailOptions = {
					  from: 'mra6541@gmail.com',
					  to: updatedUser.email, // list of receivers
					  subject: 'Reset Password', // Subject line
					  html: '<div>' +
					  	'<div>Hello ' + updatedUser.name + '</div>'+
					  	'<div> You have recently requested for a password change.'+
					  	'Kindly click on the link to modify your password.</div>'+
					  '</div>'
					};

					Emailer.sendMail(mailOptions, function (err, info) {
					   if(err)
					     console.log(err)
					   else
					     res.json(info);
					});
				}
			});
		}
	});
});


const AuthCheck = (req,res) => {
	let token = req.headers['x-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

	let decodedId = '';

	jwt.verify(token, app.get('superSecret'), function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
	decodedId = decoded;
	});
	console.log(decodedId);
	return decodedId;
}


// Listen at port 3002.
app.listen(3002);
console.log('Running on Port 3002...');



