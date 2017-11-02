//require express package
const express = require('express');

//require other dependecies
const logger = require('morgan');
const path = require('path');
const bodyParser =require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//initializeng my app
const app = express();

//adding .env file and contents
require('dotenv').config();

//sets the port manually to 3000 or from an environmental variable
const PORT = process.env.PORT || 3000;

//set app to listen on this port
app.listen(PORT, () => {
  console.log(`🗣 (${PORT})‼️  👥👥👥👤👥👥💭`)
})

//setting up the middlewares: logger, auth, bodyParser, etc.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//app refers to public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

//app will use ejs view engine, within views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app will render index.ejs file after receiving a get request to the root path
app.get('/', (req, res) => {
  res.render('landing');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
const baitRoutes = require('./routes/bait-routes');
app.use('/bait', baitRoutes);

let socketlog = [];





//EhhROR checker
app.use('*', (req, res) => {
  res.status(400).send('Not Found');
});
