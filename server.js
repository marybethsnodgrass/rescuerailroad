'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

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