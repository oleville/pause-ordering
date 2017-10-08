var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

const orders = require('./routes/orders')
const toppings = require('./routes/toppings')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/orders', orders)
app.use('/toppings', toppings)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
});

module.exports = app

app.listen(8000)
