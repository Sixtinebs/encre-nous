const models = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.user_list = function (req, res, next) {
  models.User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.user_list_A = function (req, res, next) {
  models.User.findAll({
    include: [{
        model: models.Author,
      }],
  }).then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.user_list_Br = function (req, res, next) {
    models.User.findAll({
      include: [{
          model: models.Beta_reader,
        }],
    }).then((users) => {
        res.status(200).json({ users: users });
      })
      .catch((error) => res.status(404).json({ error }));
  };

exports.user = function (req, res, next) {
  models.User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.update = function (req, res) {
  console.log(req.body.email, '<-- EMAIL')
  console.log(req
    , '<-- BODY')
  models.User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (req.body.password) {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            user
              .update({
                email: req.body.email,
                password: hash,
              })
              .then(() =>
                res.status(200).json({ user: user.id + " has been modified" })
              )
              .catch((error) => {
                console.log("Error while creating new entry", error);
                return res.status(500).json({
                  success: false,
                  message:
                    error.original.code == "ER_DUP_ENTRY" ||
                    error.original.errno == 1062
                      ? "Username already exists!"
                      : "Unknown error",
                });
              });
            // user.save();
            //res.status(200).json({ user: user.id + ' has been modified' })
          })
          .catch((error) => console.log(error));
      } else {
        user
          .update({
            email: req.body.email,
          })
          .then(() =>
            res.status(200).json({ user: user.id + " has been modified" })
          )
          .catch((error) => {
            return res.status(500).json({
              success: false,
              message:
                error.original.code == "ER_DUP_ENTRY" ||
                error.original.errno == 1062
                  ? "email already exists!"
                  : "Unknown error",
              errorCode: 1062,
            });
          });
        // user.save();
        // res.status(200).json({ user: user.id + '  has been modified' })
      }
    })
    .catch((error) =>
      res.status(404).json({ error: error, message: "user not found" })
    );
};

exports.delete = function (req, res) {
  models.User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      user.destroy();
      res
        .status(200)
        .json({ message: user.id + " has been successfully deleted!" });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = function (req, res) {
  models.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Your authantifications are not valid" });
          }
          const token = jwt.sign({ user_id: user.id }, process.env.TOKEN, {
            expiresIn: "24h",
          });
          res.header("Authorization", "Bearer " + token);
          res.status(200).json({
            message: "Your are authentificate !",
            user_id: user.id,
            token: token,
            role: user.role,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch(() => res.status(404).json({ error: new Error("ID invalide") }));
};
