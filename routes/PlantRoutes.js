const express = require('express');
const router = express.Router();
const plantController = require('../controllers')

//Add Plant
router.post('', plantController.postPlant);

//Get All Plant
router.post('/', plantController.getAllPlant);

//Get Plant by id 
router.post('//:id', plantController.getPlantById);

//Delete Plant
router.delete('/', plantController.deleteplant);

//Delete Plant by id
router.delete('//:id', plantController.deleteplant);

module.exports = router;