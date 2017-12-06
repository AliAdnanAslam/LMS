var nodemailer = require('nodemailer');

var Emailer = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'mra6541@gmail.com',
        pass: 'mra123123123'
    }
});

module.exports = Emailer;
