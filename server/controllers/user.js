'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
                password: db.user.generateHashPass(req.body.password)}
            })
            .spread(function(user, created) {
                res.json(user);
                // req.logIn(user);
                console.log(created);
                req.params._id = req.user.dataValues._id;
            })
        } else {
            res.status(200).send("passwords do not match");
        }
    },
    loginUser (req, res) {
        db.user.findOne({where: {email: req.body.email}})
        .then((user) => {
            res.send(user);
        })  
    },
    myAccount (req, res) {
        console.log("req.params", req.params);
        db.user.findOne({where: {_id: req.user.dataValues._id}})
        .then((user) => {
            res.json(user);
        })
    },
    updatePhone (req, res) {
        console.log(req.user.dataValues._id);
        console.log(req.params._id);
        // req.user.dataValues._id = req.params._id;
        // db.user.update({phone: phone}, { where: {_id: req.user.dataValues._id}, fields: {
        //     phone: req.body.newPhone}})
        // .then((user) => {
        //     res.json(user);
        // })
    }
};
            
        
