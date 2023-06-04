const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Student = require('./database');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.sendFile('register.html', { root: __dirname });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving data.');
  }
});

router.post('/', async (req, res) => {
  const { name, exam1, exam2, exam3 } = req.body;
  const student = new Student({
    name,
    exam1: parseInt(exam1),
    exam2: parseInt(exam2),
    exam3: parseInt(exam3),
  });

  try {
    await student.save();
    alert("register seccessfully");
    res.redirect('/register');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error saving data.');
  }
});

module.exports = router;
