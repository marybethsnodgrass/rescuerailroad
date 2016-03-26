'use strict';

module.exports = function(sequelize, DataTypes) {
    const group = sequelize.define('group', {
        _id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        groupName:{
            type: DataTypes.STRING, 
            notNull: true
        }
    }, {
        timestamps: false,
        classMethods: {
          associate: function(models) {
            group.belongsTo(models.user);
          }
        }
    });
    return group;
};