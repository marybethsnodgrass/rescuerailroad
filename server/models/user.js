'use strict';
const bcrypt = require('bcrypt');

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
            type: DataTypes.STRING
            // set: function(pw) {
            //     const salt = bcrypt.genSaltSync(BCRYPT_DIFFICULTY);
            //     const hash = bcrypt.hashSync(pw, salt);
            //     return this.setDataValue('password', hash);
            //  }
        }
    }, {
        timestamps: false,
        classMethods: {
            generateHashPass: function (password, done) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(11), null);
            }
        },
        instanceMethods: {
            authenticate: function (password, callback) {
                return bcrypt.compare(password, this.password, callback);
            }
        }
    });
    return user;
};