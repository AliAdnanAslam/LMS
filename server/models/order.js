const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./book');
const User = require('./user');

// Order Schema

let orderSchema = mongoose.Schema({
	userId: {
		type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		required: true
	},
	bookId: {
		type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
		required: true,
	},
	instanceId: {
		type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
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
Order.getAllOrders = (callback) => { Order.find(callback).populate('userId','name').populate('bookId','name authorName edition')};

// Receive book
Order.receive = (id, callback) => {
	let date = Date.now();
	Order.findOneAndUpdate({ _id: id}, {status: "returned", actualReturnDate: date}, {} , callback);
}

// Add new order.
Order.addOrder = (order, callback) => {
	console.log("im the new order",order);
	Order.create(order, callback);
}





module.exports = Order;



