const mongoose = require('mongoose');

// Book Schema

let bookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

let book = module.exports = mongoose.model('Book', bookSchema);

// Get books
module.exports.getBooks = (callback, limit) => book.find(callback).limit(limit);




