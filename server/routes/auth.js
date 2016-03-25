'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const driver = require('../models/driver');
const driverCtrl = require('../controllers/driver');


// router.post('/auth', passport.authenticate('local'), driverCtrl.authenticate);
// router.delete('/auth', ctrl.logout);

module.exports = router;
