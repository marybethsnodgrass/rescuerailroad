'use strict';

const express = require('express');
const router = express.Router();

const Group = require('../models/group');

const ctrl = require('../controllers/group');

router
  .post('/group', ctrl.create)
  .get('/group', ctrl.showAll)
  .get('/group/:id', ctrl.show)

module.exports = router;