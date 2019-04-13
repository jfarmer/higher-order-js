const curry = require('./curry');
const each = require('./each');

const reduce = (fn, acc, list) => {
  each(
    (item) => {
      acc = fn(acc, item);
    },
    list
  );

  return acc;
};

module.exports = curry(reduce);
