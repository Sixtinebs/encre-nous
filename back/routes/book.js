const express = require('express');
const router = express();
const controller = require('../controllers/book');
const auth = require('../middleware/auth');

router.get('/books', auth.checkJWT, controller.book_list);
router.get('/book/:id', auth.checkJWT, controller.book);
router.post('/book/new', auth.checkJWT, controller.create);
router.patch('/book/:id', auth.checkJWT, controller.update);
router.delete('/book/:id', auth.checkJWT, controller.delete);

module.exports = router;