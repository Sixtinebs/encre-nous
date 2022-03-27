const express = require('express');
const router = express();
const controller = require('../controllers/beta_reader');

router.get('/beta-readers', controller.beta_reader_list);
router.get('/beta-reader/:id', controller.beta_reader);
router.post('/beta-reader/register', controller.create);
router.patch('/beta-reader/:id', controller.update);
router.delete('/beta-reader/:id', controller.delete);

module.exports = router;