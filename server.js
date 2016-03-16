'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

const models = require('./models/');
const group = require('./routes/group');
const driver = require('./routes/driver');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Server Running');
});

// routes
app.use(group);
app.use(driver);

// app.get('/groups', (req, res) => {
//   models.Group.findAll()
//     .then(groups => res.send(groups));
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});