'use strict';

const express = require('express');
const router = express.Router();

const Driver = require('../models/driver');
const ctrl = require('../controllers/driver');

router
  .post('/driver', ctrl.createDriver)

module.exports = router;