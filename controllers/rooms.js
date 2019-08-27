const Room = require('../models/room');
// require the Item model
const Item = require('../models/item');

module.exports = {
    index,
    show,
    new: newRoom,
    create,
    delete: deleteRoom
}

function newRoom(req, res) {
    res.render('rooms/new', {
        title: 'Add Room',
        user: req.user
    });
    console.log(`${user}//// Inside newRoom controller function`);
}

function create(req, res) {
    var room = new Room(req.body);
    var item = new Item(req.body);
    console.log(`In the create room controller the value of room is: ${room}:${room._id }`);
    room.save(function(err, room) {
        //handle errors
    if (err) return res.render('rooms/new', {
        title: 'InventoryU',
        user: req.user
    });
    res.redirect(`rooms/${room._id }`);
    });
}

function index(req, res) {
    console.log('hello')
    Room.find({}, function(err, rooms) {
        Item.find({}, function(err, item){
           console.log(rooms);
           res.render('rooms/index', {
               title: 'InventoryU',
               rooms,
               item,
               user: req.user
        })
     });
 });
}

function deleteRoom(req, res) {
    Room.deleteOne({
        '_id': req.params.id
    }, function(err) {
        res.redirect('rooms');
    });
}

function show(req, res) {
    console.log('In the show room ctrlr function//////////');
    Room.find(req.body,function(err, room){
        console.log(`${room}////////////////`);
    })
    Room.findById(req.params.id, function(err, room) {
        // Item.find({}).where('_id').nin(room.item)
        console.log(req.params.id)
        Item.find({
            room: req.params.id
        }, function(err, items) {
            console.log(items);
            res.render('rooms/show', {
                title: `${room}`,
                room,
                items,
                user: req.user
            });
        });
    });
}
