const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating records', () => {
  let char;

  beforeEach((done) => {
    const charParams = {
      name: 'Mario',
      weight: 50
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

  it('Increments the weight by 1', (done) => {
    MarioChar.updateOne({name: 'Mario'}, {$inc: {weight: 1}}).then(() => {
      MarioChar.findOne({name: 'Mario'}).then((result) => {
        assert(result.weight === 51);
        done();
      });
    });
  });
});
