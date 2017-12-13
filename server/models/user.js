const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const randomToken = require('../utils/randomToken');

// Users schema
let userSchema = {
	name: {
		type: String,
		required: true
	},
	fatherName: {
		type: String,
		required: true,
	},
	registrationNo: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
	},
	type: {
		type: String,
		require: true,
		enum: ['student', 'faculty'],
		lowercase: true
	},
	image: {
		type: String,
	},
	resetToken: {
		type: String,
		default:""
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


// Update user password.
User.updatePassword = (token, password, options, callback) => {
	let query = { resetToken:token };
	let update = {
		password: password,
		resetToken: "",
	};
	User.findOneAndUpdate(query, update, options, callback);
};


// Update user profile.
User.updateUserProfile = (id, newUser, options, callback) => {
	User.findOneAndUpdate ({_id: id}, newUser, options, callback);
}


// Add user token [UPDATE]
User.addResetToken = (user, options, callback) => {
	let token = randomToken(40);
	let updatedUser = {
		...user,
		resetToken: token
	};
	User.findOneAndUpdate({_id: user._id}, updatedUser, options, callback);
}


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


// Search user by email
User.getUserNames = (userIds, callback) => {
	User.find( {_id: {$in:userIds}}, callback);
}

// Search user by token.
User.searchUserbyToken = (token, callback) => {
	User.findOne ( {resetToken: token}, callback);
}

// Search user by id
User.searchUserById = (id, callback) => {
	User.findOne({_id: id}, callback);
}

// Search user by email
User.searchByEmail = (email, callback) => {
	User.findOne({email:email}, callback);
}

module.exports = User;

