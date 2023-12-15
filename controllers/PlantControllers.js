const db = require('../models');
const Plant = db.plants

//add plant to list
const addNewPlant = async (req, res) => {
  const { name, plant_time, harvest_time, water_frequency, fertilize_frequency } = req.body;
  try {
    const newPlant = await Plant.create({
      plantName: name,
      plantPlantTime: plant_time,
      plantHarvestTime: harvest_time,
      waterFrequency: water_frequency,
      fertilizeFrequency: fertilize_frequency, 
    });
    res.status(201).json({ status: 'Success', message: 'New plant has been added!', data: newPlant.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//get all plant
const getAllPlant = async (req, res) => {
  try {
    const plant = await Plant.findAll({
      order: [['PlantID', 'ASC']]
    }); 
    return res.status(200).json({ status: 'Success', message: 'Data retrieved successfully!', data: plant });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


//get plant by id
const getPlantById = async (req, res) => {
  const id = req.params.id;
  try {
    const plant = await Plant.findAll({
      where: { id_plant: id },
      include: [db.plant],
    });

    if (relations.length > 0) {
      res.status(200).json({ status: 'Success', message: 'Data retrieved successfully!', data: plant });
    } else {
      res.status(404).json({ message: 'Plant not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//delete plant
const deletePlant = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const plant = await Plant.findByPk(id);
      if (plant) {
          await plant.destroy();
          return res.status(200).json({ status: 'Success', message: 'Plant deleted successfully!', data: plant.toJSON() });
      } else {
          return res.status(404).json({ message: 'plant not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addNewPlant,
  getAllPlant,
  getPlantById,
  deletePlant,
};