const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating records', () => {
  let char;

  beforeEach((done) => {
    const charParams = {
      name: 'Mario',
    };
    char = new MarioChar(charParams);

    char.save().then((result) => {
      done();
    });
  });

  it('Updating one record test', (done) => {
    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luc'}).then(() => {
      MarioChar.findOne({_id: char._id}).then((result) => {
        console.log(result.name)
        assert(result.name === 'Luc');
        done();
      });
    });
  });
});
