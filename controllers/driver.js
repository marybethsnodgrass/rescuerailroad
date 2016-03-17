'use strict';

const Driver = require('../models/driver');
const Group = require('../models/group');

module.exports = {

    create (req, res) {
        Driver.create({
            email: req.body.email
        }).then ((driver) => {
        res.json(driver);
        res.redirect(`/create/${driver.driverid}`);
        });
    },

    show (req, res) {
        res.render('show-drivers', {driver: req.driver});
    },

    showAll (req, res) {
        Driver.showAll({})
        .then((driver)=>{
        res.json(driver)
        });
    }
};
