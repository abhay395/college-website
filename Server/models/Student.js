const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  cgpa: { type: Number },
  course: { type: String },
  year: { type: Number },
  rank: { type: Number },
  examYear: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Student', StudentSchema);
