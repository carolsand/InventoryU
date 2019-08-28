var Item = require('../models/item');
var Room = require('../models/room');

module.exports = {
  new: newItem,
  create,
  addToRoom
};

function addToRoom(req, res) {
  Room.findById(req.params.id, function (err, room) {
    console.log(`INSIDE addToRoom of items.js ${req.params.id}`);
    room.item.push(req.body.itemId);
    room.save(function (err) {
      res.redirect(`rooms/${req.body.itemId}`);
    });
  });
}

function create(req, res) {
  /* Creat a New item not in the list */
  req.body.room = room._id;
  console.log(req.body.room);
  Item.create(req.body, function (err, item) {
    room.items.push(item);
    room.save();
    // Item.pop(item);
    res.redirect('rooms/new');
  });
}

function newItem(req, res) {
  /* Need to add a reference to the room the item is found in */
  Item.find({}, function (err, items) {
    console.log(`INSIDE newItem of items.js ${req.params.id}`);
    res.render('items/new', {
      title: 'Items Added To Your Room',
      items,
      user: req.user,
    });
  })
}