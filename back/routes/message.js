const express = require('express');
const router = express();
const controller = require('../controllers/message');
const auth = require('../middleware/auth');

router.get('/messages', auth.checkJWT, controller.discussion);
router.post('/message',auth.checkJWT, controller.create)


module.exports = router;