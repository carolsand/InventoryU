var Item = require('../models/item');
var Room = require('../models/room');

module.exports = {
  new: newItem,
  create,
  addToRoom
};

function addToRoom(req, res) {
  Room.findById(req.params.id, function (err, room) {
    room.item.push(req.body.itemId);
    room.save(function (err) {
      res.redirect(`rooms/${room._id}`);
    });
  });
}

function create(req, res) {
  /* Creat a New item not in the list */
  Item.create(req.body, function (err, item) {
    // Item.pop(item);
    res.redirect('/items/new');
  });
}

function newItem(req, res) {
  /* Need to add a reference to the room the item is found in */
  Item.find({}, function (err, items) {
    res.render('/items/new', {
      title: 'Items Added To Your Room',
      items
    });
  })
}