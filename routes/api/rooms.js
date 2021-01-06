const express = require('express');
const router = express.Router();
const roomsController = require('../../controllers/api/rooms');

console.log('REACHED:: /routes/api/room router');

/* GET pages: index, new room, show inventory, create room */
// router.crud-operation('/', roomsController.X);
router.get('/', roomsController.index);
router.get('/:id', roomsController.show);
router.post('/', roomsController.create);
router.put('/:id', roomsController.update);
router.delete('/:id', roomsController.delete);

module.exports = router;