'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {
    createUser (req, res) {
        db.user.create({
            isDriver: req.body.userType,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            password: req.body.password
        }).then (function(user) {
        res.json(user);
        res.redirect(`/create/${user._id}`);
        });
    }
};
