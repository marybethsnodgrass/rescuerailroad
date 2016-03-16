'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Group', {
    groupID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mainusername: DataTypes.STRING
  }, {
    tableName: 'Groups',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};