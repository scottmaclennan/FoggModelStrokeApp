const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  medicationSchedule: [{
    days: [String],
    time: String,
  }],
});

module.exports = mongoose.model('User', UserSchema);