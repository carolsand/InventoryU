const express = require('express');
const router = express.Router();
const inventoryController = require('../../controllers/inventory');

console.log('Reached: /routes/api/inventory');

/* GET pages: index, new room, show inventory, create room */
// router.crud-operation('/', inventoryController.X);
// router.get('/', inventoryController.index);
router.get('/new', inventoryController.new);
router.get('/show', inventoryController.showAll);
router.get('/:id', inventoryController.show);
router.post('/new', inventoryController.create);
// router.get('/:id/edit', inventoryController.showInventoryUpdate);
// router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.delete);

module.exports = router;