const mongoose = require('mongoose');

// Book Schema

let bookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	authorName: {
		type: String,
		required: true
	},
	edition: {
		type: String,
		required: true
	},
	publicationYear: {
		type: Number,
	},
	publication: {
		type: String
	},
	image: {
		type: String,
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

let Book = mongoose.model('Book', bookSchema);

// Add Book.
Book.addBook = (book, callback) => {
	Book.create(book, callback);
};


// Get all books.
Book.getAllBooks = (callback) => {
	Book.find(callback);
}

// Search book.
Book.findBook = (book, callback) => { Book.findOne( {
		name: book.name,
		author: book.author,
		edition: book.edition
	} , callback);
}



// Update book.
Book.updateBook = (id, book, options, callback) => {
  let query = { _id:id };
  Book.findOneAndUpdate(query, update, options, callback);
};


module.exports = Book;



