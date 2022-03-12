'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Author.belongsTo(models.Book, { foreignKey: 'id', allowNull: false})
      models.Beta_reader.hasMany(models.Book, { foreignKey: 'id', allowNull: true})
    }
  }
  books.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    summarize: {
      type: DataTypes.STRING
    },
    number_word: {
      type: DataTypes.DECIMAL
    },
    genre: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Books',
  });
  return books;
};