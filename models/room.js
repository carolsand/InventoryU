const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['LVRM', 'BEDRM', 'KITCN', 'GUESTRM', 'DNGROOM', 'GARAGE', 'DEN', 'OFFICE', 'MUSICROOM', 'STUDIO']
    },
    description: {
        type: String,
        required: true
    },
    items: [String], 
    item: {
        name: "",
        type: "",
        color: "",
        purchaseDate: "",
        serialNum: "",
        size: "",
    }, 
}, {
    timestamps: true
});


module.exports = mongoose.model('Room', roomSchema);