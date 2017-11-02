const bcrypt = require('bcryptjs');
const User = require('../models/Users.js');
const Bait = require('../models/Bait')

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
    })
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

usersController.index = (req, res) => {
  Bait.findAll()
  .then (bait => {
    res.render('./user/user-main', {data: bait})
  })
}

module.exports = usersController;
