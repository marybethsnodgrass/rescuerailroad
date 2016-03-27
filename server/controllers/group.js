'use strict';
const bcrypt = require('bcrypt');
const BCRYPT_DIFFICULTY = 11;

const db = require('../models/');

module.exports = {

    createGroup (req, res) {
        db.group.findOrCreate({where: 
            // {userId: req.user.dataValues._id},
            {groupName: req.body.groupName},
             defaults: {
            groupName: req.body.groupName,
            userId: req.user.dataValues._id}
        })
        console.log(db.group._id);
        //add functionality to not allow creation if group name alread exists too. does not work with or method inside of where. might have to do a find and then create
        db.groupDestInfo.findOrCreate({where: {groupId: 
            db.group._id}
            //how do i get the groupid (created above) here?
            , defaults:{
            groupId: db.group._id}
        })
        .spread(function(group, created) {
            res.json(group);
            console.log(created);
        })
    },
    groupDir (req, res) {
        db.group.findAll({ where: {}, include: [db.user]})
        .then((group) => {
            res.json(group);
        }) 
    },
};