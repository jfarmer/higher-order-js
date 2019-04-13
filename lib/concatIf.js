const curry = require('./curry');
const concat = require('./concat');

const concatIf = (fn, xs, x) => fn(x) ? concat(xs, x) : xs;

module.exports = curry(concatIf);
