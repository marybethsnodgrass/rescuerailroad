'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {
    createUser (req, res) {
        if (req.body.password === req.body.verify) {
            db.user.findOrCreate({where: {email: req.body.email}, defaults: {
                userType: req.body.userType,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                password: req.body.password}})
            .spread(function(user, created) {
                res.json(user);
                console.log(created);
            })
        } else {
            res.status(200).send("passwords do not match");
        }
    },
    loginUser (req, res) {
        db.user.findOne({where: {email: req.body.email}}).then((user) => {
            if (user) {
                const hash = user.dataValues.password;
                const pw = req.body.password;
                bcrypt.compare(pw, hash, function(err, result) {
                    if (err) throw err;
                    if (result) {
                        res.sendStatus(200);
                        // send status message success
                    } else {
                        res.sendStatus(401);
                        // throw error message that pw don't match
                    }
                });
            } else {
                res.sendStatus(400)
                // throw error message that no username
            }
        })  
    }
};
            
        
