
// These routes are not needed for profile creation
var express = require('express');
var router = express.Router();
var profileController = require('../../controllers/api/profile');

console.log('Reached:: /routes/api/profile');

router.get('/', profileController.index);
router.get('/:id', profileController.show);
router.post('/', profileController.create);
router.delete('/:id', profileController.delete);
router.put('/:id', profileController.update);

module.exports = router;