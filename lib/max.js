const curry = require('./curry');
const maxBy = require('./maxBy');
const id = require('./id');

const max = maxBy(id);

module.exports = max;
