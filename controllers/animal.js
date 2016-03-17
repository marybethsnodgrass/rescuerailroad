'use strict';

const Driver = require('../models/driver');
const Group = require('../models/group');
const Animal = require('../models/animal');

module.exports = {

    create (req, res) {
        Animal.create({
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
        res.send({animal: req.animal});
        });
    },

    showAll (req, res) {
        Animal.showAll({})
        .then((animal) => {
        res.json(animal)
        });
    }
};