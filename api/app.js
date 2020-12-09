var createError = require('http-errors');
let express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
//////
// let app = express();
let nodemailer = require("nodemailer");
var path = require('path');
//////

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
const router = require('./routes/index');
let app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

/////////////////////////
let transporter = nodemailer.createTransport({
  host: "Gmail",
  port: 587,
  secure: false,
  auth: {
    user: "vasilelucaluca@gmail.com",
    pass: "Jocfotbaldeplacere32"
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }

});

router.post("/access", (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let subject = req.body.subject
  let message = req.body.message

  var mail = {
    from: name,
    to: email,
    subject: subject,
    text: message
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail"
      })
    } else {
      res.json({
        status: "success"
      })
    }
  })
})

///////////////////////
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
