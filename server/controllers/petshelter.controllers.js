const {PetShelter} = require('../models/petshelter.models');

module.exports = {
    // c
    // create new pet
    createPet: (req, res) => {
        PetShelter.create(req.body)
        .then(data => res.json({message: "success", data: data}))
        .catch(err => res.json({message: "error", data: err}))
    },
    // r
    // get all pets
    allPets: (req, res) => {
        PetShelter.find()
        .then(data => res.json({message: "success", data: data}))
        .catch(err => res.json({message: "error", data: err}))
    },
    // get one pet
    onePet: (req, res) => {
        PetShelter.findOne({ _id: req.params.id })
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))
    },
    // u
    // edit one pet
    updatePet: (req, res) => {
        PetShelter.updateOne({ _id: req.params.id }, {$set : req.body }, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))
    },

    // d
    // remove pet from shelter/db
    deletePet: (req, res) => {
        PetShelter.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", data: err}))
    }
}