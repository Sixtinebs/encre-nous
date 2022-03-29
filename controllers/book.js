const models = require('../models/index');

exports.book_list = function (req, res, next) {
    models.Book.findAll({}).then(books => {
        res.status(200).json({ books: books })
    })
        .catch(error => res.status(404).json({ error }))
};

exports.book = function (req, res, next) {
    models.Book.findOne({ where: { id: req.params.id } })
        .then(book => {
            res.status(200).json({ book: book })
        })
        .catch(error => res.status(404).json({ error }))
};

exports.create = function (req, res, next) {
    const book = models.Book.build({
        title: req.body.title,
        summarize: req.body.summarize,
        email: req.body.email,
        number_word: req.body.number_word,
        genre: req.body.genre,
        author_id: req.body.author_id
    });
    book.save()
        .then(() => {
            res.status(201).json({ message: book.title + ' à bien été crée ' });
        })
        .catch(error => res.status(500).json({ error }))
}

exports.update = function (req, res) {

    models.Book.findOne({ where: { id: req.params.id } })
        .then(book => {
            book.update({
                title: req.body.title,
                summarize: req.body.summarize,
                email: req.body.email,
                number_word: req.body.number_word,
                genre: req.body.genre,
                author_id: req.body.author_id
            });
            book.save();
            res.status(200).json({ message: book.title + ' à bien été modifié' })
        })
        .catch(error => res.status(500).json({ error }))
};

exports.delete = function (req, res) {
    models.Book.findOne({where : {id: req.params.id}})
    .then(book => {
        book.destroy();
        res.status(200).json({message: book.title + ' a bien été supprimé !'})
    })
    .catch(error => res.status(500).json({error}))
  }