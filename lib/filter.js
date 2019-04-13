const curry = require('./curry');
const reduce = require('./reduce');
const concatIf = require('./concatIf');

const filter = pred => reduce(concatIf(pred), []);

module.exports = curry(filter);
