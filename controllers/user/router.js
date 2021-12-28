const express = require('express');

const { auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/register', require('./create'));
router.post('/login', require('./login'));

router.use(auth);
router.get('/infos', require('./getInfos'));

module.exports = router;
