'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {

    create (req, res) {
        bcrypt.genSalt(BCRYPT_DIFFICULTY, function(err, salt) {
            bcrypt.hash(req.password, salt, function(err, hash) {
            // Store hash in your password DB.
            });
        }),
        db.driver.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            dlState: req.body.dlState,
            dlNum: req.body.dlNum,
            sponsorID: req.body.sponsorID,
            password: req.body.password
        }).then ((driver) => {
        res.redirect(`/create/${driver.driverid}`);
        });
    },
    login (req, res) {
        passport.authenticate('local', {
            failureFlash: 'Incorrect email or password',
            failureRedirect: '/login',
            successFlash: 'Success!',
            successRedirect: '/'
        });
    }
}
