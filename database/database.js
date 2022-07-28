const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','developer','1234567',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;