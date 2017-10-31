const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

//handles request to the login path, renders login page
authRouter.get('/login', authHelpers.loginRedirect, (req, res, next) => {
  res.render('auth/login');
});

//hanldes post request after users submit login form on get request
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

//handles requests to the register path, renders user register page
authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

//handles user register form, will create user and input data to databse via controller, then model
authRouter.post('/register', usersController.create);

module.exports = authRouter;
