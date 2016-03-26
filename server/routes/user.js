'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user');
const ctrl = require('../controllers/user');

const cb = 

router
.post('/user/create', ctrl.createUser)
.post('/user/login',passport.authenticate('local'), ctrl.loginUser)
.get('/user/myaccount', ctrl.myAccount)
.put('/user/myaccount/phone', ctrl.updatePhone)

module.exports = router;
