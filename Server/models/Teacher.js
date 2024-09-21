const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String },
  image: { type: String },
  contact: { type: String },
  subject: { type: String },
});

module.exports = mongoose.model('Teacher', TeacherSchema);