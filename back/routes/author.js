const express = require('express');
const router = express();
const controller = require('../controllers/author');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer')

router.get('/authors', controller.authors_list);
router.get('/author/:id', auth.checkJWT, controller.author);
router.post('/author/register', controller.create);
router.patch('/author/:id', multer, auth.checkJWT, controller.update);
router.delete('/author/:id', auth.checkJWT, controller.delete);

module.exports = router;