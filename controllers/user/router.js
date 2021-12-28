const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/register', require('./create'));
router.post('/login', require('./login'));

router.use(require('../../middlewares').userAuth);
router.get('/infos', require('./getInfos'));

module.exports = router;
