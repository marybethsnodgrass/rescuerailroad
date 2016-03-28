'use strict';

const db = require('../models/');

module.exports = {

    createRoutePost (req, res) {
        db.route.findOrCreate({where: {},
            defaults: {
                originCity: req.body.originCity,
                originState: req.body.originState,
                originZip: req.body.originZip,
                originDate: req.body.originDate,
                originTime: req.body.originTime,
                destCity: req.body.destCity,
                destState: req.body.destState,
                destZip: req.body.destZip,
                destDate: req.body.destDate,
                destTime: req.body.destTime,
                //driverId: 
        }})
        .then ((route) => {
        res.json(route);
        });
    },

    getRoutes (req, res) {
        db.route.findAll({ where: {}, 
            // include: [db.driver]
        })
        .then((route) => {
            res.json(route);
        }) 
    }
};