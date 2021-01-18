const Room = require('../../models/room');

module.exports = {
    index,
    show,
    create,
    delete: deleteRoom,
    update,
}

async function index(req, res){
    const rooms = await Room.find({});
    res.status(200).json(rooms);
}

async function show(req, res){
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
}

async function create(req, res){
    const room = await Room.create(req.body);
    res.status(201).json(room);
}

async function deleteRoom(req, res) {
    const deletedRoom = await Room.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedRoom); 
}

async function update(req, res){
    const updateRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateRoom);
}