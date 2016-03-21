'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal', {
    animalRouteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    shelterID: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
};