const mongoose = require('mongoose');
var textSearch = require('mongoose-text-search');


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


//bookSchema.plugin(textSearch);
bookSchema.index({ name: 'text' });



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

// Search Book by id.
Book.searchBookById = (id, callback) => {
	Book.findOne( {_id: id}, callback);
}

// Search Book by name.
Book.searchBookByName = (name, callback) => {
	Book.find( { $text: { $search: name } }, callback );
}


// Update book.
Book.updateBook = (id, book, options, callback) => {
  let query = { _id:id };
  Book.findOneAndUpdate(query, book, options, callback);
};


module.exports = Book;



