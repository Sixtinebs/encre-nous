dotenv = require('dotenv').config();

const sequelize = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_MDP,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};

module.exports = sequelize;