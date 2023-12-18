const express = require('express');
const router = express.Router();
const plantController = require('../controllers/PlantControllers');

// Add Plant
router.post('/', plantController.addNewPlant);

// Get All Plant
router.get('/', plantController.getAllPlants);

// Get Plant by id 
router.get('/:id', plantController.getPlantById);

// Get All Plant
router.delete('/', plantController.deleteAllPlants);

// Delete Plant by id
router.delete('/:id', plantController.deletePlant);

module.exports = router;
