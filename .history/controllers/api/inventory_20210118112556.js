const Room = require('../../models/inventory');

module.exports = {
    index,
    show,
    create,
    delete: deleteRoom,
    update,
}

async function index(req, res){
    const inventory = await Inventory.find({});
    res.status(200).json(inventory);
}

async function show(req, res){
    const inventory = await Inventory.findById(req.params.id);
    res.status(200).json(inventory);
}

async function create(req, res){
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
}

async function deleteRoom(req, res) {
    const deletedInventory = await Room.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedInventory); 
}

async function update(req, res){
    const updatedInventory = await Room.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedInventory);
}