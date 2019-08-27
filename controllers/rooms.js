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
        title: 'Add Room'
    });
}

function create(req, res) {
    var room = new Room(req.body);
    console.log(`In the create room controller the value of room is: ${room}:${room._id }`);
    room.save(function(err) {
        //handle errors
    if (err) return res.render('rooms/new');
    res.redirect(`rooms/${room._id }`);
    });
}

function index(req, res) {
    console.log('hello')
    Room.find({}, function(err, rooms) {
        console.log(rooms);
        res.render('rooms/index', {
            title: 'InventoryU',
            rooms
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
// function show(req, res){
//   Room.find(req.body, function(err, rooms){
//     res.render('rooms/show', {title: 'Rooms', rooms});
//     console.log('In the create room controller//////////');
//   });
// }

function show(req, res) {
    console.log('In the show room ctrlr function//////////');
    Rooms.find(req.body,function(err, rooms){
        console.log(`${rooms}////////////////`);
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
                items
            });
        });
    });
}