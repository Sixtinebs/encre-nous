const models = require("../models/index");
const bcrypt = require("bcrypt");

const fs = require("fs");

// br = Beta-Reader
exports.beta_reader_list = function (req, res, next) {
  models.Beta_reader.findAll({})
    .then((br) => {
      res.status(200).json({ beta_readers: br });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.beta_reader = function (req, res, next) {
  models.Beta_reader.findOne({ where: { user_id: req.params.id } })
    .then((br) => {
      res.status(200).json({ beta_readers: br });
    })
    .catch((error) => res.status(404).json({ error }));
};

// find the last four BR
exports.last_beta_reader_list = function (req, res, next) {
  models.Beta_reader.findAll({
    limit: 4,
    order: [["id", "DESC"]],
  })
    .then((br) => {
      res.status(200).json({ beta_readers: br });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.create = function (req, res, next) {
  console.log(req)
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = models.User.build({
        email: req.body.email,
        role: "BR",
        password: hash,
      });
      user
        .save()
        .then((user) => {
          const br = models.Beta_reader.build({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user_id: user.id,
            birthday: req.body.birthday,
            siret: req.body.siret,
            price: req.body.price,
            description: req.body.description,
            experience: req.body.experience,
            method_working: req.body.method_working,
          });
          br.save()
            .then(() => {
              res
                .status(201)
                .json({ message: br.first_name + " successfully created" });
            })
            .catch((error) => {
              res.status(500).json({ error });
              user.destroy()
            });
        })
        .catch((error) =>
          res.status(400).json({
            error: error,
            success: false,
            errorCode: error.original.errno == 1062 ? 1062 : "Unknown error",
          })
        );
    })
    .catch((error) => {
      res.status(400).json({ error })
      console.log(error)
    });
};

exports.update = function (req, res) {
  models.Beta_reader.findOne({ where: { user_id: req.params.id } })
    .then((br) => {
      let img;
      if (br.img && req.file) {
        const image = br.img.split("/images/")[1];
        fs.unlinkSync(`images/${image}`);
        img = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
      } else if (req.file) {
        img = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
      } else {
        img = undefined;
      }
      br.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday,
        description: req.body.description,
        siret: req.body.siret,
        price: req.body.price,
        experience: req.body.experience,
        method_working: req.body.method_working,
        img: img,
      })
        .then(() => {
          res.status(200).json({
            message: br.first_name + " has been modified",
            beta_reader: br,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) =>
      res.status(404).json({ error, error, message: " Beta-reader not found" })
    );
};

exports.delete = function (req, res) {
  models.Beta_reader.findOne({ where: { user_id: req.params.id } })
    .then((br) => {
      models.User.findOne({ where: { id: br.user_id } })
        .then((user) => {
          if (br.img) {
            const image = br.img.split("/images/")[1];
            fs.unlinkSync(`images/${image}`);
          }
          br.destroy()
          user.destroy()
        })
        .catch((error) => res.status(500).json(error));
      res
        .status(200)
        .json({ message: br.first_name + " has been successfully deleted!" });
    })
    .catch((error) => res.status(500).json({ error }));
};
