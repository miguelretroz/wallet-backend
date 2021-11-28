const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/', require('./create'));
router.put('/', require('./edit'));
router.delete('/', require('./remove'));
router.get('/', require('./getUserExpenses'));

module.exports = router;