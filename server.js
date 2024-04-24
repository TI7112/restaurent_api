const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const flash = require('connect-flash');
const connectMongoose = require('./config/db')
const cors = require('cors')

const indexRouter = require('./routes/indexRoute');
const resRouter = require('./routes/resRoute');
const menuRouter = require('./routes/menuRoute');

const app = express();

// connections 

connectMongoose()

app.use(flash());
app.use(cors({
    origin:'//192.168.1.5'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'TI7112', 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


app.use('/', indexRouter);
app.use('/res', resRouter);
app.use('/menu', menuRouter);


app.listen(5000);

module.exports = app;