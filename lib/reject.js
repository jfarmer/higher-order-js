const curry = require('./curry');

const not = pred => x => !pred(x);

const reject = pred => filter(not(pred));

module.exports = curry(reject);
