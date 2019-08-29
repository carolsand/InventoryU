var Item = require('../models/item');
var Room = require('../models/room');

module.exports = {
  new: newItem,
  create,
  addToRoom
};

function addToRoom(req, res) {
  req.body.room = req.params.id;
  Item.create({user: req.user._id}, req.body, function(err){
    res.redirect('/rooms/new');
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
  Room.findById({ user: req.user._id }, req.params.id, function (err, room) {
    Item.find({}, function (err, items) {
      console.log(`INSIDE newItem of items.js ${req.params.id}`);
      res.render('rooms/new', { title: 'Add Ticket', flightId: req.params.id });
      res.render('rooms/new', {
        title: 'Add Asset',
        items: re,
        room: room_.id,
        user: req.user,
      });
   });
  })
}