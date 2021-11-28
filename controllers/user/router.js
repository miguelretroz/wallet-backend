const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/register', require('./create'));
router.post('/login', require('./login'));

module.exports = router;
