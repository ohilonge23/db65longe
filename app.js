var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON
console.log(connectionString);
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection 
var db = mongoose.connection; 

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
 console.log("Connection to DB succeeded")
});  

var job = require("./models/job")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobsRouter = require('./routes/jobs');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs', jobsRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


async function recreateDB() {
  await job.deleteMany();

  let instance1 = new job({ts_name:"Christopher Nolan", ts_yrs:6, ts_broadcastchannel:"HBO Max"});
  instance1.save(function(err, doc) {
    if(err) return console.err(err);
    console.log("First object saved")
  });

  let instance2 = new job({ts_name:"JJ martin", ts_yrs:4, ts_broadcastchannel:"Comedy Central"});
  instance2.save(function(err, doc) {
    if(err) return console.err(err);
    console.log("Second object saved")
  });

  let instance3 = new job({ts_name:"Kenny Blake", ts_yrs:10, ts_broadcastchannel:"Netflix"});
  instance3.save(function(err, doc) {
    if(err) return console.err(err);
    console.log("Third object saved")
  });
}
let reseed = false;
if(reseed) {recreateDB();}

module.exports = app;
