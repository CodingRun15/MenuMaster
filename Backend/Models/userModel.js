const connection = require ('../configs/db');
const {DataTypes} = require('sequelize');
const User = connection.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = User;