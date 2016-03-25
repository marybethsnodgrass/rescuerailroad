'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {
    createUser (req, res) {
        if (req.body.password === req.body.verify) {
            console.log("pw = verify");
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
    }

    // loginUser (req, res) {
    //     if (req.body.password === req.body.verify) {
    //         db.user.findOne({email: req.body.email}, (err, user) => {
    //             if (err) throw err;
    //             if (user) {
    //                 const hash = db.user.get(hash);
    //                 const password = req.body.password;
    //                 bcrypt.compare(password, hash, function(err, res) {
    //                  // res == true, redirect to my acct    
    //                 });
    //                 bcrypt.compare(password, hash, function(err, res) {
    //                 // res == false, error message that pw don't match
    //                 });
    //             } else {
    //                 // throw error message that no username
    //             }
    //         })
    //     }
    // }
};


        // const password = req.body.password;
        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(password, salt, (err, hash) => {
        //         hash = password;
        //         return hash;
        //     });
        // }, () => {

            
        
