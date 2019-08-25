const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemsSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['DESK', 'OCHAIR', 'BED', 'FOOTREST', 'LOUNGECHAIR', 'TV', 'TABLE', 'TBLCHAIR', 'CARPET', 'REFRIGERATOR', 'KTABLE', 'KCHAIR', 'STOVE', 'MICROWAVE', 'STOVE', 'BLENDER', 'STEREOSYSTEM', 'TIVO', 'GUITAR']
    },
    description: {
        type: String,
        default: function() {
            return Number() >= 0 || Number() <= 999999999 || /[[a-zA-Z].*/;
        }

    }

});

const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['LVRM', 'BEDRM', 'KITCN', 'GUESTRM', 'DNGROOM', 'GARAGE', 'DEN', 'OFFICE', 'MUSICROOM']
    },
    description: {
        type: String,
        required: true
    },
    items: [itemsSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Room', roomSchema);