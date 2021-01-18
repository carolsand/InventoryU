const mongoose = require('mongoose');

var Schema = mongoose.Schema;
const profileSchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  city: { type: String, max: 100 },
  state: { type: String, max: 100},
  country: { type: String, max: 100},
  inventory: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }] 
}, {
    timestamps: true
  });


module.exports = mongoose.model('Profile', profileSchema);