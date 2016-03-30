'use strict';

module.exports = function(sequelize, DataTypes) {
    const animal = sequelize.define('animal', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        animalName : {
            type: DataTypes.STRING
        },
        animalExternalId : {
            type: DataTypes.STRING,
            notNull: true
        },
        // groupDestId : {
        //     type: DataTypes.INTEGER,
        // },
        //figure out how to get groupDestId from group Name
        animalType : {
            type: DataTypes.STRING,
            notNull: true
        },
        weight : {
            type: DataTypes.INTEGER
        },
        gender : {
            type: DataTypes.STRING,
            notNull: true
        },
        breed : {
            type: DataTypes.STRING
        },
        age : {
            type: DataTypes.INTEGER
        },
        destCity : {
            type: DataTypes.STRING
        },
        destState : {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                animal.belongsTo(models.groupDestInfo);
                animal.belongsTo(models.groupOriginInfo);
                animal.belongsTo(models.driver);
            }
        }
    });
    return animal
};