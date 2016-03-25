'use strict';

module.exports = function(sequelize, DataTypes) {
    const animal = sequelize.define('animal', {
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
                animal.hasMany(models.group);
                animal.hasMany(models.user);
            }
        }
    });
    return animal
};