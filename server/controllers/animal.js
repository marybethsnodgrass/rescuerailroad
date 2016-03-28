'use strict';

const db = require('../models/');

module.exports = {

    createAnimalPost (req, res) {
        db.animal.findOrCreate({where: 
            {animalExternalId: req.body.animalExternalId},
            //add groupOriginId to where
             defaults: {
            animalName: req.body.animalName,
            animalType: req.body.animalType,
            weight: req.body.weight,
            gender: req.body.gender,
            breed: req.body.breed,
            age: req.body.age,
            destGroupName: req.body.destGroupName,
        }})
        .then ((animal) => {
        res.json(animal);
        });
    },

    getAnimals (req, res) {
        db.animal.findAll({ where: {}, 
            // include: [db.groupDestInfo]
        })
        .then((animal) => {
            res.json(animal);
        }) 
    }
};