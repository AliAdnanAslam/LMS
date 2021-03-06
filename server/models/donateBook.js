const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./book');
const User = require('./user');

// Book Schema

let donateBooksSchema = mongoose.Schema({
	bookId: {
		type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
		required: true
	},
	userId: {
		type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		required: true
	},
	status: {
		type: String,
		default: 'donated',
		enum: ['issued', 'available', 'reserved', 'donated'],
		lowercase: true,
		required: true,
	},
	reservedBy: {
		type: [{ type: Schema.Types.ObjectId, ref: 'User', null:true }],
	},
	donationDate: {
		type: Date,
		default: Date.now
	}
});

let DonateBooks = mongoose.model('DonatedBooks', donateBooksSchema, 'donateBooks');


DonateBooks.getDonatedBooks = (callback) => {
	DonateBooks.find(callback).populate('bookId').populate('userId');
}

// Receive Book
DonateBooks.receiveBook = (id, callback) => {
	DonateBooks.findOneAndUpdate( { _id:id}, {status: "available", reservedBy: null}, {}, callback);
}

DonateBooks.issueBook = (id, options, callback) => {
	DonateBooks.findOneAndUpdate( { _id:id}, {status: "issued"}, options, callback);
}

DonateBooks.getReservedBooks = (callback) => {
	DonateBooks.find({'reservedBy.type.0': {$exists: true}}, callback);
}

// Add Book.
DonateBooks.addBook = (donatedBook, callback) => {
	DonateBooks.create(donatedBook, callback);
};

// Update Book Status
DonateBooks.updateBookStatus = (id, status, options, callback) => {
	DonateBooks.findOneAndUpdate( { _id: id }, { status: status }, {}, callback);
}

// Search Book by id.
DonateBooks.searchBookById = (id, callback) => {
	DonateBooks.find( {bookId: {$in:id}}, callback).populate('bookId').populate('userId');
}

// Reserve Book.
DonateBooks.reserveBook = (id, donerId, options, callback) => {
	DonateBooks.findOneAndUpdate( {_id:id}, {reservedBy: donerId, status: 'reserved'}, options, callback );
}


module.exports = DonateBooks;



