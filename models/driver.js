'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Driver', {
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
    email:{
        type: DataTypes.STRING, 
        isEmail: true ,
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
    dlState: {
        type: DataTypes.STRING(2),   
    },
    dlNum: {
        type: DataTypes.STRING,   
    },
    sponsorID: {
        type: DataTypes.STRING,
        references: {
            model: Group,   
            key: '_id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    tableName: 'Drivers',
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
};