'use strict';

module.exports = function(sequelize, DataTypes) {
    const route = sequelize.define('route', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        originCity : {
            type: DataTypes.STRING,
            notNull: true
        },
        originState : {
            type: DataTypes.STRING,
            notNull: true
        },
        originZip : {
            type: DataTypes.STRING,
            notNull: true
        },
        originDate : {
            type: DataTypes.DATE,
            notNull: true
        },
        originTime : {
            type: DataTypes.STRING
        },
        destCity : {
            type: DataTypes.STRING,
            notNull: true
        },
        destState : {
            type: DataTypes.STRING,
            notNull: true
        },
        destZip : {
            type: DataTypes.STRING,
            notNull: true
        },
        destDate : {
            type: DataTypes.DATE,
            notNull: true
        },
        destTime : {
            type: DataTypes.STRING
        },
        phone : {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                route.belongsTo(models.groupDestInfo);
                route.belongsTo(models.groupOriginInfo);
                route.belongsTo(models.driver);
            }
        }
    });
    return route
};