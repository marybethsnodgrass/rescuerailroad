'use strict';

module.exports = function(sequelize, DataTypes) {
    const animal = sequelize.define('animal', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        animalExternalId : {
            type: DataTypes.INTEGER,
            notNull: true
        }
        // originDriver: {
        //     type: DataTypes.INTEGER
        //     // foreign key
        // }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                animal.belongsTo(models.groupDestInfo);
                animal.belongsTo(models.groupOriginInfo);
            }
        }
    });
    return animal
};