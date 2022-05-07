const express = require('express');
const router = express();
const controller = require('../controllers/user');
const auth = require('../middleware/auth');

router.get('/users', controller.user_list);
router.get('/users/a', controller.user_list_A);
router.get('/users/br', controller.user_list_Br);
router.get('/user/:id', auth.checkJWT, controller.user);
router.patch('/user/:id', auth.checkJWT, controller.update);
router.delete('/user/:id', auth.checkJWT, controller.delete);
router.post('/login', controller.login);

module.exports = router;