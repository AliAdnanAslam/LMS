const mongoose = require('mongoose');
const User = require('./user');

let fineSchema = mongoose.Schema({
	registrationNo: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: 'pending',
		enum: ['pending','received'],
		lowercase: true
	},
	amount: {
		type: Number,
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
	fineDate: {
		type: Date,
		default: Date.now
	}
});


let Fine = mongoose.model('Fine', fineSchema, 'fines');

// Add Fine.
Fine.addFine = (fine, callback) => {
	Fine.create(fine, callback);
};


// Get Fine by Id
Fine.getFineById = (id, callback) => {
	User.searchUserById( id, (err, user) => {
		if(err) console.log(err)
			else {
				let registrationNo = user.registrationNo;
				Fine.find({registrationNo: registrationNo}, callback);
			}
	})
}

// Get all fine.
Fine.getAllFine = (callback) => { Fine.find(callback) };

// Receive Fine.
Fine.receiveFine = (id,callback) => {
  let query = { _id:id };
  Fine.findOneAndUpdate(query, {status: "received"}, {}, callback);
};


module.exports = Fine;



