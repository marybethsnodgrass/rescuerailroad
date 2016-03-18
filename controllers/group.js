'use strict';

const Driver = require('../models/driver');
const Group = require('../models/group');

module.exports = {

    create (req, res) {
        Group.create({
            email: req.body.email
        }).then (function(group) {
        res.json(group);
        res.redirect(`/create/${group.groupID}`);
        });
    },

    show (req, res) {
        res.json({group: req.group});
    },

    showAll (req, res) {
        Group.showAll({})
        .then(function(group) {
        res.json(group)
        });
    }
};
