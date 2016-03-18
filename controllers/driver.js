'use strict';

const Driver = require('../models/driver');

module.exports = {

    create (req, res) {
        Driver.create({
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
            sponsorID: req.body.sponsorID
        }).then ((driver) => {
        res.json(driver);
        res.redirect(`/create/${driver.driverid}`);
        });
    },

    show (req, res) {
        res.json({driver: req.driver});
    },

    showAll (req, res) {
        Driver.showAll({})
        .then((driver)=>{
        res.json(driver)
        });
    }
};
