const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./user/router'));
root.use('/expense', require('./expense/router'));

module.exports = root;
