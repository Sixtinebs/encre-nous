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
      //models.Beta_reader.hasMany(models.Book, { foreignKey: 'id', allowNull: true})
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
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
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