'use strict';
const bcrypt = require('bcrypt');

const BCRYPT_DIFFICULTY = 11;

module.exports = function(sequelize, DataTypes) {

    const driver = sequelize.define('driver', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        firstname: {
            type:DataTypes.STRING,
            notNull: true
        },
        lastname: {
            type:DataTypes.STRING,
            notNull: true
        },
        dlState: {
            type: DataTypes.STRING(2),   
        },
        dlNum: {
            type: DataTypes.STRING,   
        },
        sponsorID: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                driver.belongsTo(models.user);
            }
        }
    });
    return driver;
};



// bcrypt.genSalt(BCRYPT_DIFFICULTY, (err, salt) => {
//             bcrypt.hash(req.password, salt, (err, hash) => {
            // Store hash in your password DB.
            // });