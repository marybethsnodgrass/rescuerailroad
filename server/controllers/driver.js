'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {
    createDriver (req, res) {
        if (req.body.password === req.body.verify) {
            db.driver.findOne({email: req.body.email}, (err, user) => {
                if (err) throw err;
                if (user) {
                    res.redirect('/login');
                } else {
                    db.driver.create(req.body, (err) => {
                        if (err) throw err;
                        res.redirect('/login');
                    }); 
                }
            });
        } else {
            res.redirect('/register'), {
                email: req.body.email,
                message: 'Passwords do not match'
            };
        }
    },
    createDriver2 (req, res) {
        db.driver.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dlState: req.body.dlState,
            dlNum: req.body.dlNum,
            sponsorID: req.body.sponsorID,
        }).then ((driver) => {
        res.redirect('/login');
        });
    }
}
