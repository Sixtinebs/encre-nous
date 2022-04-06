const express = require('express');
const router = express();
const controller = require('../controllers/user');

router.get('/users', controller.user_list);
router.get('/user/:id', controller.user);
router.patch('/user/:id', controller.update);
router.delete('/user/:id', controller.delete);
// router.post('/login');

module.exports = router;