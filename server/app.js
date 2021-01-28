const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { getMaxListeners } = require('process');
const dotenv = require('dotenv');
dotenv.config();
const transporter = require('./config');

const ip = require('ip');
const ipAddress = ip.address();

const app = express();
// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  })
);

//Static folder
app.use('/public', express.static(path.join(__dirname, '/Contact.js')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/send', (req, res) => {
  // console.log(req.body);
  const output = `
  <p>You have a new message from your online CV</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Subject: ${req.body.subject}</li>
  <li>Email: ${req.body.email}</li>
  <li>Message: ${req.body.message}</li>
  </ul>`;

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465, //or 587
  //   secure: true, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.email, // generated ethereal user
  //     pass: process.env.password, // generated ethereal password
  //   },
  // });

  // send mail with defined transport object
  let mailOptions = {
    from: req.body.email, // sender address
    to: "lucavasileluca@yahoo.com", // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (response, error, info) => {
    if (error) {
      return console.log(error)
    }
    if (response) {
      return console.log(response)
    }

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  });


});

app.listen(3000, () => {
  console.log('Server started...');
  console.log(`Network access via: ${ipAddress}!`);
});