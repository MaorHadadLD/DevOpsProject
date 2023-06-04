const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const registerRouter = require('./register');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection options with authentication
const uri = 'mongodb+srv://raphael2gb:GWznVTuYs1vPcpLl@devopscluster.vamopoy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/register', registerRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/register.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'register.css'));
});

app.listen(port, () => {
  console.log('Server is up and running on port', port);
});
