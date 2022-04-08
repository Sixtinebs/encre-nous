const express = require('express');
const router = express();
const controller = require('../controllers/beta_reader');
const auth = require('../middleware/auth');


router.get('/beta-readers', controller.beta_reader_list);
router.get('/beta-reader/:id',auth.checkJWT, controller.beta_reader);
router.post('/beta-reader/register', controller.create);
router.patch('/beta-reader/:id', auth.checkJWT, controller.update);
router.delete('/beta-reader/:id', auth.checkJWT, controller.delete);

module.exports = router;