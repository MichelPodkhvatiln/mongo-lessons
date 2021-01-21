const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding records', () => {
  let char;

  beforeEach((done) => {
    const charParams = {
      name: 'Mario',
    };
    char = new MarioChar(charParams);

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  it('Find one record test', (done) => {
    MarioChar.findOne({name: 'Mario'}).then((result) => {
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Find one record by ID test', (done) => {
    if (!char) {
      return
    }

    MarioChar.findOne({_id: char.id}).then((result) => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
