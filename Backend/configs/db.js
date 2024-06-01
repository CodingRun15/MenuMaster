const path = require('path');
require('dotenv').config({path:path.resolve(__dirname, '.env')});
const {Sequelize} = require('sequelize');
// console.log(process.env.URI);
console.log(process.env.PORT);
const connection = new Sequelize(process.env.URI);
module.exports =
    connection