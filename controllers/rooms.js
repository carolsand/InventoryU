const Room = require('../models/room');
// require the Item model
const Item = require('../models/item');

module.exports = {
    index,
    show,
    new: newRoom,
    create,
    delete: deleteRoom,
    showAll,
    updateRoom,
    showRoomUpdate
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
            title: `InventoryU`,
            room,
            user: req.user
        });
    });
}

function index(req, res) {
    console.log('hello')
    Room.find({user: req.user._id}, function(err, rooms) {
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
    console.log('In the deelete room ctrlr function//////////');
    Room.deleteOne({'_id': req.params.id}, function(err) {
        res.redirect('show');
    });
}

function showAll(req, res) {
    console.log('In the showAll room ctrlr function//////////');
    Room.find({user: req.user._id}, function (err, rooms) {
        //    Item.find({room: req.params.id}, function(err, item) {
        console.log(rooms);
        res.render('rooms/show', {
            title: `InventoryU}`,
            rooms,
            user: req.user
        });
    });
    //   });
}

function showRoomUpdate(req, res) {
    console.log('In the showRoomUpdate function of the rooms ctrlr//////////');
    if (req.user){
     res.render(`rooms/update`, { room: req.params.id, user: req.user, title: 'InventoryU'});
    }else {
        res.redirect('/rooms/show');
    }
}

function updateRoom(req, res) {
    console.log('In the update function of the rooms ctrlr//////////');
    if (req.user) {
        Room.findByIdAndUpdate(req.params.id, req.body, function (err) {
            if (err) console.log(err);
            res.redirect(`/rooms/show`);
        });
    } else { res.redirect(`/rooms/${req.params.id}`) };
}