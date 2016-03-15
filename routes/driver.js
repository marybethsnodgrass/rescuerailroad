'use strict';

const express = require('express');
const router = express.Router();

const Driver = require('../models/driver');

const ctrl = require('../controllers/driver');

router
  .get('/drivers', ctrl.index)
  .post('/drivers', ctrl.create)
  .get('/drivers/:id', ctrl.show)
  .get('/drivers/:id/edit', ctrl.edit)
  .put('/drivers/:id', ctrl.update)
  .delete('/drivers/:id', ctrl.destroy);

module.exports = router;