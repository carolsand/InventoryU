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
    room.save(function(err) {
        //handle errors
        if (err) return res.render('/rooms/new');
        res.redirect(`/rooms/${room._id }`);
    });
}

function index(req, res) {
    Room.find({}, function(err, rooms) {
        res.render('rooms/index', {
            title: 'ALL Rooms',
            rooms
        });
    });
}

function deleteRoom(req, res) {
    Room.deleteOne({
        '_id': req.params.id
    }, function(err) {
        res.redirect('/rooms');
    });
}
// function show(req, res){
//   Room.findById(req.params.id, function(err, flights){
//     res.render('flights/show', {title: 'Flight Details', flights});
//     console.log(flights);
//   });
// }

function show(req, res) {
    Room.findById(req.params.id, function(err, room) {
        // Item.find({}).where('_id').nin(room.item)
        Item.find({
            room: req.params.id
        }, function(err, items) {
            console.log(items);
            res.render('rooms/show', {
                title: 'Room Detail',
                room,
                item
            });
        });
    });
}