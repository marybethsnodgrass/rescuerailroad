'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const Auth = require('../models/auth');
const ctrl = require('../controllers/auth');


router.post('/auth', passport.authenticate('local'), ctrl.loginUser);
router.delete('/auth', ctrl.logout);

module.exports = router;
