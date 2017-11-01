const express = require('express');
const baitRoutes = express.Router();
const baitController = require('../controllers/bait-controller');

baitRoutes.get('/new', (req, res) => {
  res.render('user-bait/bait-create')
});

baitRoutes.get('/:id', baitController.show);

baitRoutes.post('/', baitController.create);

module.exports =  baitRoutes;
