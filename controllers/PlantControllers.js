const db = require('../models');
const Plant = db.plants;

// add plant to list
const addNewPlant = async (req, res) => {
  const { name, plant_time, harvest_time, water_frequency, fertilize_frequency, photo } = req.body;

  if (!name || !plant_time || !harvest_time || !water_frequency || !fertilize_frequency || !photo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newPlant = await Plant.create({
      plantName: name,
      plantPlantTime: new Date(plant_time),
      plantHarvestTime: new Date(harvest_time),
      waterFrequency: parseInt(water_frequency),
      fertilizeFrequency: parseInt(fertilize_frequency),
      photo: photo
    });

    res.status(201).json({ status: 'Success', message: 'New plant has been added!', data: newPlant.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// get all plants
const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll({
      order: [['PlantID', 'ASC']],
    });

    const plantsJson = plants.map((plant) => plant.toJSON());

    return res.status(200).json({ status: 'Success', message: 'All plants retrieved successfully!', data: plantsJson });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// get plant by id
const getPlantById = async (req, res) => {
  const id = req.params.id;
  try {
    const plant = await Plant.findByPk(id);

    if (plant) {
      return res.status(200).json({ status: 'Success', message: 'Plant retrieved successfully!', data: plant.toJSON() });
    } else {
      return res.status(404).json({ message: 'Plant not found' });
    }
  } catch (error) {
    console.error(error);

    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: 'Invalid plant ID format' });
    }

    return res.status(500).json({ error: 'Internal server error' });
  }
};

// delete all plants
const deleteAllPlants = async (req, res) => {
  try {
    await Plant.destroy({
      where: {},
      truncate: true,
    });
    return res.status(200).json({ status: 'Success', message: 'All plants deleted successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// delete plant by id
const deletePlant = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const plant = await Plant.findByPk(id);
    if (plant) {
      await plant.destroy();
      return res.status(200).json({ status: 'Success', message: 'Plant deleted successfully!' });
    } else {
      return res.status(404).json({ message: 'Plant not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addNewPlant,
  getAllPlants,
  getPlantById,
  deleteAllPlants,
  deletePlant,
};
