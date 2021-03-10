const mongoose = require('mongoose');

var Schema = mongoose.Schema;
const inventorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    description: {type: String, max: 500},
    inventoryLocation: {type: String, max: 500},
}, {
    timestamps: true
});


module.exports = mongoose.model('Inventory', inventorySchema);