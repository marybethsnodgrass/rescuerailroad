'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Driver', {
    DriverID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING
  }, {
    tableName: 'Drivers',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};