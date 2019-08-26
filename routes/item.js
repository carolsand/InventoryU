var express = require('express');
var router = express.Router();
var itemsController = require('../controllers/items');

router.get('/items/new', itemsController.new);
router.post('/items', itemsController.create);
router.post('/rooms/:id/items', itemsController.addToRoom);

module.exports = router;