'use strict';

const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');
const ctrl = require('../controllers/animal');

router
  .post('/animal', ctrl.createAnimalPost)

module.exports = router;

