const curry = require('./curry');
const reduce = require('./reduce');

const smallerOfBy = curry((fn, x, y) => fn(x) < fn(y) ? x : y);

const minBy = fn => reduce(smallerOfBy(fn), +Infinity);

module.exports = curry(minBy);
