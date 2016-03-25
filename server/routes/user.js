'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user');
const ctrl = require('../controllers/user');

router
.post('/user', ctrl.createUser)

module.exports = router;
