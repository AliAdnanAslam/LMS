const mongoose = require('mongoose');

// Order Schema

let lineItemSchema = mongoose.Schema({
	bookId: {
		type: String,
		required: true
	},
	actualReturnDate: { // Date when user returns the book.
		type: Date,
	},
	expectedReturnDate: { // Expected date of returning book.
		type: Date,
	},
	issueDate: {
		type: Date,
		default: Date.now
	}
});

let LineItem = mongoose.model('Orders', lineItemSchema, 'lineItems');

// Get all line items.
LineItem.getAllOrders = (callback) => { LineItem.find(callback)};

// Add new line item.
LineItem.add = (linItem, callback) => {
	LineItem.create(order, callback);
}





module.exports = LineItem;



