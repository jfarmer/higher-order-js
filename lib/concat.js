const curry = require('./curry');

const concat = (xs, ys) => xs.concat(ys);

module.exports = curry(concat);
