const models = require('../models/index');


exports.authors_list = function (req, res, next) {
    models.Author.findAll({}).then(authors => {
        res.status(200).json({ authors: authors })
    })
        .catch(error => res.status(404).json({ error }))
};

exports.author = function (req, res, next) {
    models.Author.findOne({ where: { id: req.params.id } })
        .then(author => {
            res.status(200).json({ author: author })
        })
        .catch(error => res.status(404).json({ error }))
};

exports.create = function (req, res, next) {
    const user = models.User.build({
        email: req.body.email,
        password: req.body.password
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
                    res.status(201).json({ message: author.first_name + ' à bien été crée ' });
                })
                .catch(error => res.status(500).json({ error }))

        })
        .catch(error => res.status(500).json({ error }));

}

exports.update = function (req, res) {

    models.Author.findOne({ where: { id: req.params.id } })
        .then(author => {
            author.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birthday: req.body.birthday,
                description: req.body.description,
                img: req.body.img,
            });
            author.save();
            res.status(200).json({ message: author.first_name + ' à bien été modifié' })
        })
        .catch(error => res.status(500).json({ error }))
};

exports.delete = function (req, res) {
    models.Author.findOne({ where: { id: req.params.id } })
        .then(author => {
            author.destroy();
            res.status(200).json({ message: author.first_name + ' a bien été supprimé !' })
        })
        .catch(error => res.status(500).json({ error }))
}