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
const Fine			 = require('./models/fine');

let app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/lms');
app.set('superSecret', config.secret);
let db = mongoose.connection;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb', parameterLimit:50000 }));
app.use(bodyParser.text({ limit: '10mb' }));


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


// Update Donated Book Status
app.put('/api/updateBookStatus', (req, res) => {
	let bookId = req.body.id;
	let bookStatus = req.body.status;
	DonateBooks.updateBookStatus(bookId, bookStatus, {}, (err, book) => {
		if(err) console.log(err);
			else res.json(book);
	 } )
})

// Update book.
app.put('/api/updateBook', (req, res) => {
	let book = req.body;
	Book.updateBook( book.id, book, {}, (err, book) => {
		if(err) console.log(err);
		else res.json(book);
	})
})

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

// Change user password.
app.put('/api/changePassword', (req,res) => {
	let userObj = req.body;
	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;

	User.searchUserById(userId, (err, user) => {
		if(err) console.log(err)
			else {
				console.log(user);
				let passwordIsValid	 = bcrypt.compareSync(userObj.oldPassword, user.password);
				if (!passwordIsValid) {
					res.json({ success: false, message: 'Password is wrong' });
				} else {
					userObj.newPassword = bcrypt.hashSync(userObj.newPassword, 8);
					User.changePassword( userId, userObj.newPassword, {}, (err2, info) => {
						if(err2) console.log(err2)
							else res.json({ ...info, success:true});
					})
				}
			}
	} )
})


// Update user profile
app.put('/api/updateUser', (req,res) => {
	let userId = '';
	let newUser = req.body;

	if( req.body.id ) {
		userId = req.body.id;
	} else {
		let loginToken = AuthCheck (req, res);
		userId = loginToken.id;
	}


	User.updateUserProfile(userId, newUser, (err, info) => {
		if(err) console.log(err)
			else res.json(info)
	} )
})

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


// Book Status of user by id
app.get('/api/users/bookStatus', (req, res) => {
	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;
	Order.searchById( (err, order) => {
		if(err){
			console.log(err);
		} else {
				console.log("here I am", order);
				res.json( {user: userId, ...order});
			}
	})
})

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


app.put('/api/resetPassword', (req, res) => {
	let obj = req.body;
	User.searchUserbyToken(obj.token, (err, user) => {
		if (err) {
			console.log(err);
		} else {
			if(!user){
				res.json({success:false, respones: "Invalid Token"});
			} else {
				obj.password = bcrypt.hashSync(obj.password, 8);
				User.updatePassword(obj.token, obj.password, {}, (err, info) => {
					if(err) {
						console.log(err);
					} else {
						res.json({...info, success:true});
					}
				})
			}
		}
	})
})


// Search book by name
app.get('/api/books/search/:name', (req, res) => {
	let name = req.params.name;
	Book.searchBookByName( name, (err, books) => {
		if (err) {
			console.log(err);
		} else {
			if(books.length !== 0) {
				let booksIds = []; // Get the IDs of the books.
				books.forEach(book => {
					booksIds.push(book._id);
				})


				 // Get all the instances of that book.
				DonateBooks.searchBookById( booksIds, (err, book) => {
						if(err) {
							console.log(err);
						} else {
							if(book.length !== 0){ // If instances exists
								res.json(book);
							}
						}
					});
			} else { // If no book with this name exists.
				res.json(books);
			}
		}
	});

});



// Receive book.
app.put('/api/receiveBook', (req,res) => {
	let orderId = req.body.orderId;
	Order.receive(orderId, (err, order) => {
		if(err) console.log(err)
			else {
				DonateBooks.receiveBook(order.instanceId, (err, book) => {
					if(err) console.log(err)
						else {
							res.json({success: 'true', ...book});
						}
				})
			}
	})
})

// Issue book.
app.put('/api/issueBook', (req, res) => {
	let bookId = req.body.bookId;
	let instanceId = req.body.instanceId;
	let userId = req.body.reservedBy;
	let CurrentDate = new Date();
	CurrentDate.setMonth(CurrentDate.getMonth() + 2);
	console.log(bookId);
	let orderObj = { userId: userId, bookId: bookId, instanceId:instanceId , expectedReturnDate: CurrentDate };

	Order.addOrder ( orderObj, (err, order) => {
		if(err) console.log(err)
			else {
				DonateBooks.issueBook(instanceId, {}, (err, book) => {
					if(err) console.log(err)
						else {
							res.json({'success': true, ...book});
						}
				})
			}
	} )
})

// Get all reserved books.
app.get('/api/reservedBooks', (req, res) => {
	// Post the query.
	DonateBooks.getReservedBooks((err, books) => {
		if(err) { // If error
			console.log(err);
		}
		console.log("found books", books);
		res.json(books); // Show result.
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


// Create new order.
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


app.get(('/api/fines'), (req, res) => {
	Fine.getAllFine( (err, fine) => {
		if(err) console.log(err)
			else res.json(fine)
	} )
})


app.post(('/api/addFine'), (req, res) => {
	Fine.addFine( req.body, (err,fine) => {
		if (err) console.log(err)
			else res.json(fine)
	})
})



//POST get book by id

app.post('/api/bookById', (req, res) => {

	let bookId = req.body.id;

	Book.searchBookById (bookId, (err, user) => {
		if(err) {res.json(err)}
			else {res.json(user)}
	})
})

// Get Fine by Id
app.get('/api/getFineById', (req,res) => {
	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;
	Fine.getFineById (userId, (err,fine) => {
		if(err) console.log(err)
			else res.json(fine);
	})
})


// Receive Fine
app.put('/api/receiveFine', (req, res) => {
	let fineId = req.body.fineId;
	Fine.receiveFine (fineId, (err, fine) => {
		if(err) console.log(err)
			else res.json(fine);
	} )
})



//POST get profile by id

app.post('/api/userProfileById', (req, res) => {

	let userId = req.body.id;

	User.searchUserById (userId, (err, user) => {
		if(err) {res.json(err)}
			else {res.json(user)}
	})
})




//GET Profile

app.get('/api/userProfile', (req, res) => {

	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;

	User.searchUserById (userId, (err, user) => {
		if(err) {
			res.json(err)
		} else {
			res.json(user)
		}
	})
})


// Reserve a book.
app.put('/api/reserveBook', (req, res) => {

	let loginToken = AuthCheck (req, res);
	let userId = loginToken.id;
	let instanceId = req.body.bookId;
	DonateBooks.reserveBook(instanceId, userId, {}, (err, info) => {
		if(err) {
			console.log(err)
		}
			else {
				res.json(info);
			}
	})


});


/**
 * API Route for getting books status for logged in user.
 *
 * @param  {String}   '/api/bookStatus' route path
 * @param  {Function} (req,res) call back function
 * @return {Json}	Books status.
 * @since  1.0
 */
app.get('/api/bookStatus', (req, res) => {

	let loginToken = AuthCheck(req,res);

	Order.getAllOrders((err, orders) => {
		if (err) {
			console.log(err);
		}
		res.json(orders);
	});
});




// Get all orders.
app.get('/api/orders', (req, res) => {


	Order.getAllOrders((err, orders) => {
		if (err) {
			console.log(err);
		}
		res.json(orders);
	});
});



/**
 * API Route for forgetPassword. Sends forget password email and add reset token to user profile.
 *
 * @param  {String}   '/api/forgetPassword' route path
 * @param  {Function} (req,res) call back function
 * @return {Json}	Email status.
 * @since  1.0
 */
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
					userId = updatedUser._id;

					User.searchUserById(userId, (err,inf) => {
						if(err) console.log(err)
							else {
								const mailOptions = {
									  from: 'mra6541@gmail.com',
									  to: inf.email, // list of receivers
									  subject: 'Reset Password', // Subject line
									  html: '<div>' +
									  	'<div>Hello ' + inf.name + '</div>'+
									  	'<div> You have recently requested for a password change.'+
									  	'Kindly click on the <a href="http://localhost:3000/resetPassword/'+ inf.resetToken +
									  	'">link</a> to change your password.</div>'+
									  '</div>'
								};

								Emailer.sendMail(mailOptions, function (err, info) {
								   if(err)
								     console.log(err)
								   else
								     res.json(info);
								});
							}
					})
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



