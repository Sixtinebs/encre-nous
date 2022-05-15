const models = require('../models/index');
const bcrypt = require('bcrypt');

exports.authors_list = function (req, res, next) {
    models.Author.findAll({}).then(authors => {
        res.status(200).json({ authors: authors })
    })
        .catch(error => res.status(404).json({ error }))
};

exports.author = function (req, res, next) {
    models.Author.findOne({ where: { user_id: req.params.id } })
        .then(author => {
            res.status(200).json({ author: author })
        })
        .catch(error => res.status(404).json({ error }))
};
//TODO : ne pas créer le user si author pas créer
// faire message si email déjà utilisé
exports.create = function (req, res, next) {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = models.User.build({
                email: req.body.email,
                role: 'A',
                password: hash
            });
            user.save()
                .then((user) => {
                    const author = models.Author.build({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        birthday: req.body.birthday,
                        user_id: user.id,
                        description: req.body.description,
                        img: req.body.img,
                    });
                    author.save()
                        .then(() => {
                            res.status(201).json({ message: author.first_name + ' successfully created' });
                        })
                        .catch(error => res.status(500).json({ error }))
                })
                .catch((error) => res.status(400).json({ 
                    error: error,
                    success: false,
                    errorCode: error.original.errno == 1062 ? 1062 : "Unknown error",
                
                }))
        })
        .catch(error => res.status(400).json({ error  }));
}

exports.update = function (req, res) {
    models.Author.findOne({ where: { user_id: req.params.id } })
        .then(author => {
            author.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birthday: req.body.birthday,
                description: req.body.description,
                img: req.body.img,
            })
                .then(() => {
                    res.status(200).json({ message: author.first_name + ' has been modified', author: author })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(404).json({ error: error, message: 'Author not found' }))
};

exports.delete = function (req, res) {
    models.Author.findOne({ where: { user_id: req.params.id } })
        .then(author => {
            models.User.findOne({ where: {id: author.user_id}})
            .then((user) => {
                author.destroy();
                user.destroy()
            } )
            res.status(200).json({ message: author.first_name + ' has been successfully deleted!' })
        })
        .catch(error => res.status(500).json(error))
}