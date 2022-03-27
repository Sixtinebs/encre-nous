const express = require('express');
const router = express();
const controller = require('../controllers/betaReader');

router.get('/beta-readers', controller.betaReader_list);
router.get('/beta-reader/:id', controller.betaReader);
router.post('/register', controller.create);
router.patch('/beta-reader/:id', controller.update);
router.delete('/beta-reader/:id', controller.delete);

module.exports = router;