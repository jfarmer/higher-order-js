const curry = require('./curry');

const compose2 = f => g => (...args) => f(g(...args));
const id = x => x;

const compose = (...fns) => reduce(compose2, id, fns);

module.exports = compose;
