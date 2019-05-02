
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require('body-parser');

const mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(cookieParser());

// rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usuarios', require('./routes/usuarios'));
app.use('/bots', require('./routes/bots'));

// api do bot
app.use('/api/acesso/auth', require('./routes/api/acesso/auth_app'));
app.use('/bots/api/browser/acesso/auth', require('./routes/bots/api/browser/auth_app'));
app.use('/bots/api/browser/mensagens', require('./routes/bots/api/browser/lista_mensagens'));
app.use('/bots/api/browser/mensagens/enviar', require('./routes/bots/api/browser/recebe_mensagem'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;

// var postTest = require('./ClientHttp/postTest');
// async function Thread1() {  
//   await delay(1000);     
//   postTest.executa();    
//   Thread1();
// }

// Thread1();