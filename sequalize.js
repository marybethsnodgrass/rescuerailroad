const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/rescuerr');

const Group = sequelize.define('Group', {
  mainUsername: Sequelize.STRING,
  groupID: Sequelize.STRING
});

const Driver = sequelize.define('Driver', {
  email: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

sequelize.sync().then(() => {
  console.log("seqeualize.sync()");
}).then(() => {
  console.log(".then");
});
