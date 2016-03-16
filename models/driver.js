'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Driver', {
    driverID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'driver_id',
      autoIncrement: true
    },
    firstName: DataTypes.STRING, 
    lastName: DataTypes.STRING, 
    email: DataTypes.STRING, 
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