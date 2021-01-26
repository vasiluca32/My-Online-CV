const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //or 587
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.email, // generated ethereal user
        pass: process.env.password, // generated ethereal password
    },
});

module.exports = transporter;