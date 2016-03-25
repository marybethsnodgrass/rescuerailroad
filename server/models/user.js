'use strict';
const bcrypt = require('bcrypt');

const BCRYPT_DIFFICULTY = 11;

module.exports = function(sequelize, DataTypes) {

    const user = sequelize.define('user', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        email:{
            type: DataTypes.STRING, 
            isEmail: true ,
            notNull: true
        },
        userType:{
            type: DataTypes.STRING, 
            notNull: true
        },
        phone: {
            type: DataTypes.STRING(10),
            notNull: true
        },
        address: {
            type: DataTypes.STRING,   
        },
        city: {
            type: DataTypes.STRING,   
            notNull: true
        },
        state: {
            type: DataTypes.STRING(2),   
            notNull: true
        },
        zip: {
           type: DataTypes.STRING(5),   
            notNull: true
        },
        password: {
            type: DataTypes.STRING,
            set: function(pw) {
                const salt = bcrypt.genSaltSync(BCRYPT_DIFFICULTY);
                const hash = bcrypt.hashSync(pw, salt);
                return this.setDataValue('password', hash);
             }
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
            }
        }
    });
    return user;
};