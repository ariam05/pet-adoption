const controller = require('../controllers/petshelter.controllers');
const {PetShelter} = require('../models/petshelter.models');

module.exports = app => {
    // c
    app.post('/api/pets', controller.createPet)
    // r
    app.get('/api/pets', controller.allPets)
    app.get('/api/pets/:id', controller.onePet)
    // u
    app.patch('/api/pets/:id', controller.updatePet)
    // d
    app.delete('/api/pets/:id', controller.deletePet)

}
