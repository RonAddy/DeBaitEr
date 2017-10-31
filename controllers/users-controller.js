const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
  })
  .then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
        res.redirect('/user');
    });
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

module.exports = usersController;
