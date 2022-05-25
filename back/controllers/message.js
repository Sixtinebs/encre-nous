const models = require("../models/index");
const { Op } = require("sequelize");

exports.discussion = function (req, res, next) {
    if(req.query.my_id == res.locals.user.user_id){
        models.Message.findAll({
            where: {
                [Op.or]: [{
                    originator_id: req.query.my_id, recipient_id: req.query.user_id
                }, {
                    originator_id: req.query.user_id, recipient_id: req.query.my_id
                }]
              }
    
        })
          .then((discussion) => {
            res.status(200).json({ discussion });
          })
          .catch((error) => res.status(404).json({ error }));
    }else {
        res.status(403).json({message :'You are not authorized to access this resource'})
    }

  };

exports.create = function (req, res, next) {
    if(req.body.my_id == res.locals.user.user_id) {
        models.Message.create({
            message: req.body.message,
            originator_id: req.body.my_id,
            recipient_id: req.body.user_id,
          })
            .then(() => {
              res.status(201).json({ message: "Message is save" });
            })
            .catch((error) => res.status(500).json({ error }));
    } else {
        res.status(403).json({message :'You are not authorized to access this resource'})
    }
  };