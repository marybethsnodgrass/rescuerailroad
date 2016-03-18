'use strict';

const Group = require('../models/group');

module.exports = {

    create (req, res) {
        Group.create({
            groupname: req.body.groupname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip:
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
