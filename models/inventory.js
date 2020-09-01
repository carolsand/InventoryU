const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    description: {type: String, max: 500},
    roomLocation: {type: String, max: 500},
}, {
    timestamps: true
});


module.exports = mongoose.model('Inventory', inventorySchema);