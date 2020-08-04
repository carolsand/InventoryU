const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  city: { type: String, max: 100 },
  state: { type: String, max: 100},
  country: { type: String, max: 100},
  experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }] 
}, {
    timestamps: true
  });


module.exports = mongoose.model('Profile', profileSchema);