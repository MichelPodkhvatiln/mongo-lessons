const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting records', () => {
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

  it('Delete one record test', (done) => {
    MarioChar.findOneAndRemove({name: 'Mario'}).then(() => {
      MarioChar.findOne({name: 'Mario'}).then((result) => {
        assert(result === null);
        done();
      });
    });
  });
});
