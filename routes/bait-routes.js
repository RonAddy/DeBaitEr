const express = require('express');
const baitRoutes = express.Router();
const baitController = require('../controllers/bait-controller');

baitRoutes.get('/new', (req, res) => {
  res.render('user-bait/bait-create')
});

baitRoutes.get('/:id', baitController.show);

baitRoutes.post('/', baitController.create);

baitRoutes.put('/:id', baitController.update);

baitRoutes.get('/discuss/:id',baitController.showDiscuss)

module.exports =  baitRoutes;
