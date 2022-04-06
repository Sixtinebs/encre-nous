const models = require('../models/index');


exports.user_list = function (req, res, next) {
    models.User.findAll({}).then(users => {
        res.status(200).json({ users: users })
    })
        .catch(error => res.status(404).json({ error }))
};

exports.user = function (req, res, next) {
    models.User.findOne({ where: { id: req.params.id } })
        .then(user => {
            console.log(user)
            res.status(200).json({ user: user })
        })
        .catch(error => res.status(404).json({ error }))
}

exports.update = function (req, res) {

    models.User.findOne({ where: { id: req.params.id } })
        .then(user => {
            user.update({
                email: req.body.email,
                password: req.body.password
            });
            user.save();
            res.status(200).json({ user: user.id + ' à bien été modifié' })
        })
        .catch(error => res.status(500).json({ error }))
};

exports.delete = function (req, res) {
    models.User.findOne({ where: { id: req.params.id } })
        .then(user => {
            user.destroy();
            res.status(200).json({ message: user.id + ' a bien été supprimé !' })
        })
        .catch(error => res.status(500).json({ error }))
}

// exports.login = function () {

// };

