var Item = require('../../models/item');

module.exports = {
  index,
  show,
  create,
  delete: deleteItem,
  update,
}

async function index(req, res){
  const item = await Item.find({});
  res.status(200).json(item);
}

async function show(req, res){
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
}

async function create(req, res){
  const item = await Item.create(req.body);
  res.status(201).json(item);
}

async function deleteItem(req, res) {
  const deletedItem = await Room.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedItem); 
}

async function update(req, res){
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedItem);
}