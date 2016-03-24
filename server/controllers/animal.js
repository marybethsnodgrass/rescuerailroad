'use strict';

const db = require('../models/');

module.exports = {

    create (req, res) {
        db.animal.create({
            shelterID: req.body.shelterID,
            destination: req.body.destination
        }).then ((animal) => {
        res.json(animal);
        res.redirect(`/create/${animal.animalRouteID}`);
        });
    },

    show (req, res) {
        Animal.find({
            where: {
                id: req.params.animalRouteID
            }
        }).then ((animal) => {
        res.json({animal: req.animal});
        });
    },

    showAll (req, res) {
        db.animal.showAll({})
        .then((animal) => {
        res.json(animal)
        });
    }
};