const Bait = require('../models/Bait');

const baitController = {};

baitController.show = (req, res) => {
  Bait.findById(req.params.id)
    .then( bait => {
      res.render('user-bait/bait-show', {data: bait});
    })
    .catch(err => {
      res.status(500).send({error: err});
    });
};

baitController.create = (req, res) => {
  Bait.create({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  })
  .then(bait => {
    console.log(bait);
    res.redirect(`/bait/${bait.id}`)
  })
};

module.exports = baitController;
