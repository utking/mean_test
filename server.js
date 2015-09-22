process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(1, process.env.NODE_ENV);
var express = require('./config/express');

var app = express();
app.listen(3000);

module.exports = app;

console.log('Application runnig at http://localhost:3000');

