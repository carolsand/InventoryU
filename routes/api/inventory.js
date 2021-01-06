const express = require('express');
const router = express.Router();
const inventoryController = require('../../controllers/api/inventory');

console.log('Reached: /routes/api/inventory');

/* GET pages: index, new room, show inventory, create room */
// router.crud-operation('/', inventoryController.X);
router.get('/', inventoryController.index);
router.get('/:id', inventoryController.show);
router.post('/', inventoryController.create);
router.delete('/:id', inventoryController.delete);
router.put('/:id', inventoryController.update);

module.exports = router;