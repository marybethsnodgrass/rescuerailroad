'use strict';

module.exports = function(sequelize, DataTypes) {
    const groupOriginInfo = sequelize.define('groupOriginInfo', {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
    }, {
        timestamps: false,
        classMethods: {
          associate: function(models) {
            groupOriginInfo.belongsTo(models.group);
          }
        }
    });
    return groupOriginInfo;
};