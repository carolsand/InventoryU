
// These routes are not needed for profile creation
var express = require('express');
var router = express.Router();
var profileController = require('../../controllers/profile');

router.get('/profile/new', profileController.new);
// router.put('/profile/:id/', profileController.update);
router.get('/profile/:id/', profileController.getProfile);
router.post('/profile/', profileController.createUserProfile);
router.delete('/profile/:id', profileController.deleteProfile);

module.exports = router;