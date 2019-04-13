const curry = require('./curry');
const reduce = require('./reduce');

const largerOfBy = curry((fn, x, y) => fn(x) > fn(y) ? x : y);

const maxBy = fn => reduce(largerOfBy(fn), -Infinity);

module.exports = curry(maxBy);
