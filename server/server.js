'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const db = require('./models/');

const group = require('./routes/group');
const driver = require('./routes/driver');
const animal = require('./routes/animal');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Server Running');
});

//routes
app.use(group);
app.use(driver);
app.use(animal);

db.sequelize.sync().then(() => {
  console.log("seqeulize.sync()");
}).then(() => {
  console.log(".then");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});