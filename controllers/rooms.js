const Room = require('../models/room');
// require the Item model
const Item = require('../models/item');

module.exports = {
    index,
    show,
    new: newRoom,
    create,
    delete: deleteRoom,
    showAll
}

function newRoom(req, res) {
    var rooms = new Room(req.params.body);
    var items = new Item(req.params.body);
    res.render('rooms/new', {
        title: 'Add Room',
        user: req.user,
        items,
        rooms
    });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var room = new Room(req.body);
    room.user = req.user._id;
    console.log(req.body);
    room.save(function (err) {
        if (err) return res.redirect('/rooms/new');
        // res.redirect('/movies');
        res.redirect(`/rooms/${room._id}`);
    });
    console.log(`In the create room controller the value of room is: ${room}:${room._id }`);
}

function show(req, res) {
    console.log('In the show room ctrlr function//////////');
    Room.findById(req.params.id, function (err, room) {
        console.log(room);
        res.render('rooms/new', {
            title: `${room}`,
            room,
            user: req.user
        });
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

function showAll(req, res) {
    console.log('In the showAll room ctrlr function//////////');
    Room.find({}, function (err, rooms) {
        //    Item.find({room: req.params.id}, function(err, item) {
        console.log(rooms);
        res.render('rooms/show', {
            // title: `${title}`,
            rooms,
            user: req.user
        });
    });
    //   });
}