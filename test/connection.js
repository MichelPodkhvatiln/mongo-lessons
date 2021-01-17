const mongoose = require('mongoose');
const db = mongoose.connection;

//connect to database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

db.once('open', () => {
  console.log('Connection has been made');
});

db.on('error', console.error.bind(console, 'connection error:'))
