'use strict';

const db = require('../models/');

module.exports = {
    createDriver (req, res) {
        console.log("req.user", req.user);
        db.driver.findOrCreate({where: {dlNum: req.body.dlNum}, defaults: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dlState: req.body.dlState,
            userId: req.user.dataValues._id,
            sponsorID: req.body.sponsorID}
        })
        .spread(function(driver, created) {
            res.json(driver);
            console.log(created);
        })
    }
}
