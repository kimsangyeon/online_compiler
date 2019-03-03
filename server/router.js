const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.index);
router.get('/canvas', controller.canvas);
router.post('/compile', controller.compile);

module.exports = router;