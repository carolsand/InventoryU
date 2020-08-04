const User = require('../models/user');

module.exports = {
  index,
  header
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render('index', {
      title: "InventoryU",
      users,
      user: req.user
    });
  });
}

function header(req, res) {
  User.find({}, function (err, users) {
    res.render('header', {
      title: "InventoryU",
      users,
      user: req.user
    });
  });
}