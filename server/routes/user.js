'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user');
const ctrl = require('../controllers/user');

const cb = 

router
.post('/user', ctrl.createUser)
.post('/login', ctrl.loginUser)

module.exports = router;
