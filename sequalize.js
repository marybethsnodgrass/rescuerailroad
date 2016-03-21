const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/rescuerr');

sequelize.sync().then(() => {
  console.log("seqeulize.sync()");
}).then(() => {
  console.log(".then");
});
