'use strict';

const db = require('../models/');

module.exports = {

    createAnimalPost (req, res) {
        db.animal.findOrCreate({where: 
            {animalExternalId: req.body.animalExternalId},
            //add groupOriginId to where
             defaults: {
            animalName: req.body.animalName,
            animalExternalId: req.body.animalExternalId,
            destGroupName: req.body.destGroupName,
            animalType: req.body.animalType,
            weight: req.body.weight,
            gender: req.body.gender,
            breed: req.body.breed,
            age: req.body.age}
        })
        .then ((animal) => {
        res.json(animal);
        });
    },

    getAnimal (req, res) {
    
    },

    getAnimals (req, res) {
    
    }
};