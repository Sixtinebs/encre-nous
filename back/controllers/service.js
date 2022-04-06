const models = require('../models/index');

exports.service_list = function (req, res, next) {
    models.Service.findAll({}).then(services => {
        res.status(200).json({ services: services })
    })
        .catch(error => res.status(404).json({ error }))
};

exports.service = function (req, res, next) {
    models.Service.findOne({ where: { id: req.params.id } })
        .then(service => {
            res.status(200).json({ service: service })
        })
        .catch(error => res.status(404).json({ error }))
};

exports.create = function (req, res, next) {
    const service = models.Service.build({
        book_id: req.body.book_id,
        beta_reader_id: req.body.beta_reader_id,
        prix_service: req.body.prix_service
    });
    service.save()
        .then(() => {
            res.status(201).json({ message: 'Le service à bien été crée ' });
        })
        .catch(error => res.status(500).json({ error }))
}

exports.update = function (req, res) {

    models.Service.findOne({ where: { id: req.params.id } })
        .then(service => {
            service.update({
                book_id: req.body.book_id,
                beta_reader_id: req.body.beta_reader_id,
                prix_service: req.body.prix_service
            });
            service.save();
            res.status(200).json({ message: 'Le service à bien été modifié' })
        })
        .catch(error => res.status(500).json({ error }))
};

exports.delete = function (req, res) {
    models.Service.findOne({where : {id: req.params.id}})
    .then(service => {
        service.destroy();
        res.status(200).json({message: 'Le service a bien été supprimé !'})
    })
    .catch(error => res.status(500).json({error}))
  }