import crypto from 'crypto';

const n = crypto.randomInt(70);

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
      mega: [ n , crypto.randomInt(70),9,13,51,21 ]
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };

  export default {
    users
  };