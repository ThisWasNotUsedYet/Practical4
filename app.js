const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/last.txt', indexRouter);
app.use('/color.html', indexRouter);
app.use('/log.html', indexRouter);
app.use('/main.html', indexRouter);
app.use('/first.html', indexRouter);
app.use('/log2.html', indexRouter);

module.exports = app;
