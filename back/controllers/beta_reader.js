const models = require('../models/index');

// br = Beta-Reader
exports.beta_reader_list = function(req, res, next) {
    models.Beta_reader.findAll({}).then(br => {
       res.status(200).json({beta_readers: br})
      })
      .catch(error => res.status(404).json({error}))
};

exports.beta_reader = function(req, res, next) {
    models.Beta_reader.findOne({ where : { id: req.params.id}})
        .then(br => {
            res.status(200).json({beta_readers: br})
        })
        .catch(error => res.status(404).json({error}))
};

exports.create = function(req, res, next) {
    const user = models.User.build({
        email: req.body.email,
       password: req.body.password
    });
    user.save()
    .then((user) => {

        const br = models.Beta_reader.build({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user_id: user.id,
            birthday: req.body.birthday,
            description: req.body.description,
            img: req.body.img,
            experience: req.body.experience,
            method_working: req.body.method_working
        });
        br.save()
        res.status(201).json({message: br.first_name + ' à bien été crée '});
    })
    .catch(error => res.status(500).json({error}))
}

exports.update = function(req, res) {

    models.Beta_reader.findOne({ where : { id: req.params.id}})
        .then(br => {
            br.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birthday: req.body.birthday,
                description: req.body.description,
                img: req.body.img,
                experience: req.body.experience,
                method_working: req.body.method_working
            });
            br.save();
            res.status(200).json({message: br.first_name + ' à bien été modifié'})
        })
        .catch(error => res.status(500).json({error}))
};

exports.delete = function (req, res) {
    models.Beta_reader.findOne({where : {id: req.params.id}})
    .then(br => {
        br.destroy();
        res.status(200).json({message: br.first_name + ' a bien été supprimé !'})
    })
    .catch(error => res.status(500).json({error}))
  }