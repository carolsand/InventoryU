const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    itemDescr: {
        name: "",
        designer: "",
        type: "",
        size: "",
        color: "",
        purchaseDate: "",
        price: {
            type: Number,
            min: 0
        },
        serialNum: "",
        warranty: "",
        room: ""
    },
    
});

module.exports = mongoose.model('Items', itemsSchema);