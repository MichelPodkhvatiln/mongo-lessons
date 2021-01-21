const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', () => {
  it('Saving record to the database', (done) => {
    const charParams = {
      name: 'Mario',
    };
    const char = new MarioChar(charParams);

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
