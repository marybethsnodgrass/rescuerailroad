'use strict';

const express = require('express');
const router = express.Router();

const Group = require('../models/group');

const ctrl = require('../controllers/group');

router
  .post('/group', ctrl.createGroup)

module.exports = router;