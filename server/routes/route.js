'use strict';

const express = require('express');
const router = express.Router();

const Route = require('../models/route');
const ctrl = require('../controllers/route');

router
.post('/route', ctrl.createRoutePost)
.get('/route', ctrl.getRoutes)

module.exports = router;

