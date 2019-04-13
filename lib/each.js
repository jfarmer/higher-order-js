const curry = require('./curry');

const each = (fn, iter) => {
  for (let x of iter) {
    fn(x);
  }
};

module.exports = curry(each);
