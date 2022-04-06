const express = require('express');
const router = express();
const controller = require('../controllers/author');

router.get('/authors', controller.authors_list);
router.get('/author/:id', controller.author);
router.post('/author/register', controller.create);
router.patch('/author/:id', controller.update);
router.delete('/author/:id', controller.delete);

module.exports = router;