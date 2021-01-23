const Inventory = require('../../models/inventory');

module.exports = {
    index,
    show,
    create,
    delete: deleteRoom,
    update,
}

async function index(req, res){
    try{
        const inventory = await Inventory.find({});
        res.status(200).json(inventory);
    }catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function show(req, res){
    try{
        const inventory = await Inventory.findById(req.params.id);
        res.status(200).json(inventory);
    }catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function create(req, res){
    try{
        const inventory = await Inventory.create(req.body);
        res.status(201).json(inventory);
    } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function deleteRoom(req, res) {
    try{
        const deletedInventory = await Room.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedInventory); 
    }catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function update(req, res){
    try {
        const updatedInventory = await Room.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedInventory);
    }catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}