const req = require('express/lib/request');
const models = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

exports.login = function (req, res) {
    models.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Your authantifications are not valid' })
                    }
                    const token = jwt.sign(
                        {
                            user_id: user.id
                        },
                        process.env.TOKEN,
                        {
                            expiresIn: '24h'
                        }
                    );
                    res.header('Authorization', 'Bearer ' + token);
                    res.status(200).json({
                        message: 'Your are authentificate !',
                        user_id: user.id,
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(() => res.status(404).json({ error: new Error('ID invalide') }))
};

