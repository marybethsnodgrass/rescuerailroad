'use strict';

const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');
const ctrl = require('../controllers/animal');

router
  .post('/animal', ctrl.create)
  .get('/animal', ctrl.showAll)
  .get('/animal/:id', ctrl.show)

module.exports = router;

// add new todo
