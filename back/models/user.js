'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Beta_reader, {
        allowNull: true, 
        foreignKey: 'user_id' 
      })
      this.hasOne(models.Author, {
        allowNull: true,  
        foreignKey: 'user_id' 
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.INTEGER(225),
      allowNull: false
    },
    role: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};