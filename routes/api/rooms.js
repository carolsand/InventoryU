const express = require('express');
const router = express.Router();
const roomsController = require('../../controllers/rooms');
console.log('We are in the room router');

/* GET pages: index, new room, show inventory, create room */
// router.crud-operation('/', roomsController.X);
router.get('/', roomsController.index);
router.get('/new', roomsController.new);
router.get('/show', roomsController.showAll);
router.get('/:id', roomsController.show);
router.post('/new', roomsController.create);
router.get('/:id/edit', roomsController.showRoomUpdate);
router.put('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.delete);

module.exports = router;