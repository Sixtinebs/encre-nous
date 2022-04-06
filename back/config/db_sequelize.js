// const { Sequelize } = require('sequelize');
// dotenv = require('dotenv').config();

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_MDP, {
//     dialect: 'mysql',
//     host: process.env.DB_HOST,
//     port: 8889
// });


// module.exports = sequelize;
const fs = require('fs');
dotenv = require('dotenv').config();

const sequelize = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_MDP,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 8889
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