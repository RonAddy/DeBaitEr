const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser =require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🗣 (${PORT})‼️  👥👥👥👤👥👥💭`)
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());






//EhhROR checker
app.use('*', (req, res) => {
  res.status(400).send('Not Found');
});
