'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {

    static associate(models) { 
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
     });
      this.hasMany(models.Book, { 
        as: 'book', 
        foreignKey: 'author_id'
       });

    }    
  }
  Author.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER.UNSIGNED
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