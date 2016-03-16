'use strict';

const express = require('express');
const router = express.Router();

const Group = require('../models/group');

const ctrl = require('../controllers/group');

router
  // .get('/groups', ctrl.index)
  // .post('/groups', ctrl.create)
  // .get('/groups/:id', ctrl.show)
  // .get('/groups/:id/edit', ctrl.edit)
  // .put('/groups/:id', ctrl.update)
  // .delete('/groups/:id', ctrl.destroy);

module.exports = router;