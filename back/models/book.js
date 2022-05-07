'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, { 
        // allowNull: false, 
        foreignKey: 'author_id' 
      });
      this.belongsToMany(models.Beta_reader, {
        through: 'Service',
        foreignKey: 'book_id', 
        allowNull: true
      })
    }
  }
  Book.init({
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
      type: DataTypes.TEXT('mediumtext') 
    },
    number_word: {
      type: DataTypes.DECIMAL
    },
    genre: {
      type: DataTypes.STRING
    },
    author_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Author',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};