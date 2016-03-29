'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var db        = {};
const Sequelize = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/rescuerr'
const sequelize = new Sequelize(DATABASE_URL);
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
