const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./user/router'));

module.exports = root;