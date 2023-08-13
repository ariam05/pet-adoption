const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters in length"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters in length"]
    },
    petDescription: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters in length"]
    },
    skill1: {
        type: String,
        required: [false],
        min: [0, "Pet skills can not be fewer than 0"],
        max: [3, "Pet skills can not be more than 3"],
    },
    skill2: {
        type: String,
        required: [false],
        min: [0, "Pet skills can not be fewer than 0"],
        max: [3, "Pet skills can not be more than 3"],
    },
    skill3: {
        type: String,
        required: [false],
        min: [0, "Pet skills can not be fewer than 0"],
        max: [3, "Pet skills can not be more than 3"],
    },
}, {timestamps: true})


const PetShelter = mongoose.model("PetShelter", PetShelterSchema);

    module.exports = {
        PetShelter
    }
