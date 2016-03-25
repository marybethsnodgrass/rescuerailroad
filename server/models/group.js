'use strict';

module.exports = function(sequelize, DataTypes) {
    const group = sequelize.define('group', {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
    }, {
        timestamps: false,
        classMethods: {
          associate: function(models) {
            group.hasOne(models.user);
          }
        }
    });
    return group;
};