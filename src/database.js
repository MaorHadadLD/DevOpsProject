const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  exam1: Number,
  exam2: Number,
  exam3: Number,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
