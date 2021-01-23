const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    items: { type: Schema.Types.ObjectId, ref: 'Item' },
}, {
    timestamps: true
});


module.exports = mongoose.model('Room', roomSchema);