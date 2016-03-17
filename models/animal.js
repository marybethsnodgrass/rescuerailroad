'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Animal', {
    animalRouteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    shelterID: DataTypes.INTEGER
  }, {
    tableName: 'Drivers',
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
};