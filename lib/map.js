const curry = require('./curry');
const concat = require('./concat');
const reduce = require('./reduce');

const map = fn => reduce((acc, item) => concat(acc, fn(item)), []);

module.exports = curry(map);
