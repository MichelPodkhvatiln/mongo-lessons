const mongoose = require('mongoose');
const db = mongoose.connection;

//Connect the db before test run
before((done) => {
  //Connect to database
  mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  db.once('open', () => {
    console.log('Connection has been made');
    done();
  });

  db.on('error', console.error.bind(console, 'Connection error:'))
});

//Drop the characters collections before each test
beforeEach((done) => {
  const mariochars = db.collections.mariochars;

  mariochars.drop(() => {
    done();
  });
});


