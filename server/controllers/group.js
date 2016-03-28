'use strict';

const db = require('../models/');

module.exports = {

    createGroup (req, res) {
        db.group.findOrCreate({where: 
            // {userId: req.user.dataValues._id},
            {groupName: req.body.groupName},
             defaults: {
            userId: req.user.dataValues._id}
        })
        .spread(function(group, created) {
            db.groupDestInfo.findOrCreate({where: {groupId: 
            group._id}
            })
            .spread(function(group, created) {
                db.groupOriginInfo.findOrCreate({where: {groupId: 
                group._id}
                })
                .spread(function(group, created) {
                    res.json(group);
                    console.log(created);
                })
            })
        //add functionality to not allow creation if group name alread exists too. does not work with or method inside of where. might have to do a find and then create
        })
    },
    groupDir (req, res) {
        db.group.findAll({include: [db.user]})
        .then((group) => {
            res.json(group);
        }) 
    }
};