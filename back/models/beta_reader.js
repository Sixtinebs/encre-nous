'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beta_reader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
         foreignKey: 'user_id' 
      });
      this.belongsToMany(models.Book, { 
        through: 'Service',
        as: 'book',
        foreignKey: 'beta_reader_id', 
        allowNull: true });
    }
   
  }
  Beta_reader.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    user_id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    siret: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    price: {
      allowNull: true,
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    experience: {
      type: DataTypes.STRING
    },
    method_working: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Beta_reader',
  });
  return Beta_reader;
};