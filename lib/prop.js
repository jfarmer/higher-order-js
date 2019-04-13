const curry = require('./curry');

const prop = (name, obj) => obj[name];

module.exports = curry(prop);
