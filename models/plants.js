// models/plants.js

module.exports = (sequelize, DataTypes) => {
    const Plant = sequelize.define('plant', {
      PlantID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "ID of the plant"
      },
      plantName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Name of the plant"
      },
      plantPlantTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "Time when the plant was planted"
      },
      plantHarvestTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "Time when the plant is expected to be harvested"
      },
      waterFrequency: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "How many times to water the plant per week"
      },
      fertilizeFrequency: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "How many times to fertilize the plant per month"
      },
    }, {
      tableName: 'plant',
      timestamps: true,
    });
  
    return Plant;
  };
  