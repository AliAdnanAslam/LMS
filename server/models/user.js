const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Users schema
let userSchema = {
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
		validate: {
          validator: function(v, cb) {
            User.find({email: v}, function(err,docs){
               cb(docs.length == 0);
            });
          },
          message: 'User already exists!'
        }
	},
	date: {
		type: Date,
		default: Date.now()
	}
}

let User = mongoose.model ( 'user', userSchema);


// Get users.
User.getUsers = (callback, limit) => User.find(callback).limit(limit);

// Add users.
User.addUser = (user, callback) => {
	// Hash the password.
	user.password = bcrypt.hashSync(user.password, 8);
	User.create(user, callback);
};

// Update user.
User.updateUser = (id, user, options, callback) => {
	let query = { _id:id };
	let update = {
		name: user.name,
		email: user.email,
	};
	User.findOneAndUpdate(query, update, options, callback);
};

// Remove user.
User.removeUser = (id, callback) => {
	let query = { _id:id };
	User.remove(query, callback);
}

// User Login.
User.login = ( user, callback ) => {
	let email = {
		email: user.email,
	};
	User.findOne(email, callback);
}


// Search user by id
User.searchUserById = ( id, callback) => {
	User.findOne({_id: id}, callback);
}

module.exports = User;

