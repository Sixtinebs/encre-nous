const express = require('express');
const router = express();
const controller = require('../controllers/service');

router.get('/services', controller.service_list);
router.get('/service/:id', controller.service);
router.post('/service/new', controller.create);
router.patch('/service/:id', controller.update);
router.delete('/service/:id', controller.delete);

module.exports = router;