var express = require('express');
var router = express.Router();

console.log('Reached:: routes/api/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// router.post('/facts', isLoggedIn, usersCtrl.addFact);

module.exports = router;