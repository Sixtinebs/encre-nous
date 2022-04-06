const express = require('express');
const router = express();
const controller = require('../controllers/book');

router.get('/books', controller.book_list);
router.get('/book/:id', controller.book);
router.post('/book/new', controller.create);
router.patch('/book/:id', controller.update);
router.delete('/book/:id', controller.delete);

module.exports = router;