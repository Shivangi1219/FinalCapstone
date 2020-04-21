require('./models/db');
const cors = require('cors');

const paypal = require('paypal-rest-sdk');

const express = require('express');

const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const employeeController = require('./controllers/employeeController');
const home = require('./controllers/home');

var app = express();

app.use(cors({origin: true, credential: true}));
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type","application/json; charset=utf-8");
  next();
});


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);
app.use('/home', home);