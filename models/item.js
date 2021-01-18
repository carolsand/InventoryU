const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    user: {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    asName: {
        type: String,
        required: true,
        enum: ['DESK', 'CHAIR', 'BED', 'FOOTREST', 'LOUNGECHAIR', 'TV', 'TABLE', 'TBLCHAIR', 'CARPET', 'REFRIGERATOR', 'KTABLE', 'KCHAIR', 'STOVE', 'MICROWAVE', 'STOVE', 'BLENDER', 'STEREOSYSTEM', 'TIVO', 'GUITAR']
    },
    asDescript: {
        type: String,
        default: function() {
            return Number() >= 0 || Number() <= 999999999 || /[[a-zA-Z].*/;
        }
    },
    date: {
        type: Date,
        Date: function () {
            return new Date(new Date).setFullYear(new Date().getFullYear() + 1);
        }
    },
    price: {
        type: Number,
        min: 0
    },
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
});

module.exports = mongoose.model('Items', itemsSchema);