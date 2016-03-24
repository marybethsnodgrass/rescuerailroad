'use strict';

const express = require('express');
const router = express.Router();

const Driver = require('../models/driver');
const ctrl = require('../controllers/driver');

router
  .post('/driver', ctrl.create)
  .get('/driver', ctrl.showAll)
  .get('/driver/:id', ctrl.show)

module.exports = router;