const curry = require('./curry');
const reduce = require('./reduce');

const reduce1 = (fn, [x, ...xs]) => {
  if (x === undefined) {
    throw TypeError('List must not be empty.');
  }

  return reduce(fn, x, xs);
};

module.exports = curry(reduce1);
