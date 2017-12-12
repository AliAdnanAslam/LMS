const mongoose = require('mongoose');

// Book Schema

let donateBooksSchema = mongoose.Schema({
	bookId: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: 'donated',
		enum: ['issued', 'available', 'reserved', 'donated'],
		lowercase: true,
		required: true,
	},
	donationDate: {
		type: Date,
		default: Date.now
	}
});

let DonateBooks = mongoose.model('DonatedBooks', donateBooksSchema, 'donateBooks');


DonateBooks.getDonatedBooks = (callback) => {
	DonateBooks.find(callback);
}

// Add Book.
DonateBooks.addBook = (donatedBook, callback) => {
	DonateBooks.create(donatedBook, callback);
};

// Search Book by id.
DonateBooks.searchBookById = (id, callback) => {
	DonateBooks.find( {bookId: {$in:id}}, callback);
}



module.exports = DonateBooks;



