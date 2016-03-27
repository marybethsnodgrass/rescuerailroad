'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {
    createDriver (req, res) {
        db.driver.findOrCreate({where: {dlNum: req.body.dlNum}, defaults: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dlState: req.body.dlState,
            dlNum: req.body.dlNum,
            userId: req.user.dataValues._id,
            sponsorID: req.body.sponsorID}
        })
        .spread(function(driver, created) {
            res.json(driver);
            console.log(created);
        })
    }
}
