'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
}, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};