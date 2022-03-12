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
      models.Author.hasOne(models.Book, { foreignKey: 'id', allowNull: false})
    }
  }
  Author.init({
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
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};