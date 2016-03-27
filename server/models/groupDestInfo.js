'use strict';

module.exports = function(sequelize, DataTypes) {
    const groupDestInfo = sequelize.define('groupDestInfo', {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
    }, {
        timestamps: false,
        classMethods: {
          associate: function(models) {
            groupDestInfo.belongsTo(models.group);
          }
        }
    });
    return groupDestInfo;
};