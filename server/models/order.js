const mongoose = require('mongoose');

// Order Schema

let orderSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	bookId: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: 'issued',
		enum: ['issued', 'returned'],
		lowercase: true,
		required: true,
	},
	issueDate: {
		type: Date,
		default: Date.now
	},
	expectedReturnDate: {
		type: Date,
	},
	actualReturnDate: {
		type: Date,
	}
});

let Order = mongoose.model('Orders', orderSchema, 'orders');

// Get all orders.
Order.getAllOrders = (callback) => { Order.find(callback)};

// Add new order.
Order.addOrder = (order, callback) => {
	console.log(order);
	Order.create(order, callback);
}





module.exports = Order;



