'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {

    createGroup (req, res) {
        db.group.findOrCreate({where: {groupName: req.body.groupName}, defaults: {
            groupName: req.body.groupName,
            userId: req.user.dataValues._id}})
        .spread(function(group, created) {
            res.json(group);
            console.log(created);
        })
    }
};
