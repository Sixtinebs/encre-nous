'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, { foreignKey: 'recipient_id' });
      this.belongsTo(models.Beta_reader, { foreignKey: 'originator_id' });
    }
  }
  Message.init({
    id:{ 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    message:{ 
      allowNull: false,
      type: DataTypes.TEXT('mediumtext')
    },
    recipient_id:
    { 
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'User',
        key: 'id'
    }
    },
    originator_id: { 
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'User',
        key: 'id'
    }
    },
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};