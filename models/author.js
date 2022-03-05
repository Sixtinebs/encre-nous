'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    FIRST_NAME: {
      type: Sequelize.STRING
    },
    LAST_NAME: {
      type: Sequelize.STRING
    },
    EMAIL: {
      type: Sequelize.STRING
    },
    BIRTHDAY: {
      type: Sequelize.DATE
    },
    DESCRITPION: {
      type: Sequelize.STRING
    },
    IMG: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};