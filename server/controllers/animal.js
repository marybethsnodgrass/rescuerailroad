'use strict';

const db = require('../models/');

module.exports = {

    createAnimalPost (req, res) {
        db.animal.create({
            shelterID: req.body.shelterID,
            destination: req.body.destination
        }).then ((animal) => {
        res.json(animal);
        res.redirect(`/create/${animal.animalRouteID}`);
        });
    },
};