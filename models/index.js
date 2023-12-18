// Importing modules
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    dialectOptions: {
      socketPath: process.env.DATABASE_LINK,
    },
  }
);

// Checking if the connection is successful
(async () => {
  try {
    await sequelize.authenticate();
    console.log(`Database connected to discover`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
