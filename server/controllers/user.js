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
                password: db.user.generateHashPass(req.body.password)}})
            .spread(function(user, created) {
                res.json(user);
                console.log(created);
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
        db.user.findOne({where: {email: req.user.dataValues.email}})
        .then((user) => {
            res.json(user);
        })
    },
    updatePhone (req, res) {
        db.user.update({ where: {email: req.user.dataValues.email}, fields: {
            phone: req.body.newPhone}})
        .then((user) => {
            res.json(user)
        })
    }
};
            
        
