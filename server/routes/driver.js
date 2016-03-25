'use strict';

const express = require('express');
const router = express.Router();

const Driver = require('../models/driver');
const ctrl = require('../controllers/driver');

router
  .post('/driver', ctrl.create)
  .post('/driverLogin', ctrl.login)

module.exports = router;