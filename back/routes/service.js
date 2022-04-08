const express = require('express');
const router = express();
const controller = require('../controllers/service');
const auth = require('../middleware/auth');

router.get('/services', auth.checkJWT, controller.service_list);
router.get('/service/:id',auth.checkJWT, controller.service);
router.post('/service/new',auth.checkJWT, controller.create);
router.patch('/service/:id',auth.checkJWT, controller.update);
router.delete('/service/:id', auth.checkJWT,controller.delete);

module.exports = router;