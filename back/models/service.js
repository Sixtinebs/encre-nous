'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Service.init({
    id:{ 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    book_id: {
      type: DataTypes.INTEGER
    },
    beta_reader_id:{
      type: DataTypes.INTEGER
    },
    prix_service: {
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};