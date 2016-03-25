'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {

    createGroup (req, res) {
        db.group.create({
            groupname: req.body.groupname,
        }).then (function(group) {
        res.json(group);
        });
    }
};
