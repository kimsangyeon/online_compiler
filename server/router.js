const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.compiler);
router.get('/index', controller.index);
router.get('/canvas', controller.canvas);
router.post('/compile', controller.compile);

module.exports = router;