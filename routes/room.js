const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/room');

/* GET page. */
// router.get('/', roomsController.X);
router.get('/', roomsController.index);
router.get('/new', roomsController.new);
router.get('/:id', roomsController.show);
router.post('/', roomsController.create);

module.exports = router;