var express = require('express');
var router = express.Router();
var itemsController = require('../../controllers/api/item');

console.log('Reached:: /routes/api/items');

router.get('/', itemsController.index);
router.get('/:id', itemsController.show);
router.post('/', itemsController.create);
router.delete('/:id', itemsController.delete);
router.put('/:id', itemsController.update);

module.exports = router;