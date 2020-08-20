const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
}, {
        timestamps: true
    });

const inventorySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Inventory', inventorySchema);