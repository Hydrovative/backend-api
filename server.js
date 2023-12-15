//importing modules
const express = require('express');
const dotenv = require('dotenv').config();
const session = require('session');
const cors = require('cors');
const sequelize =require('sequelize');
const db = require('./models');
const cookieParser = require('cookie-parser');



//assigning variable apps
const app = express();

//synchronizing database
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re-sync");
});

//cookie secure
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{secure: true}
}));

//middleware
app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

//routes for user API
app.use();
app.use();
app.use();
app.use();
app.use();
app.use();
app.use();


//set up port
const PORT = process.env.PORT || 8080

//route handler
app.get('/', (req, res) => {
    const message = 'Hello, welcome to the Hydrovative API!';
    console.log('Index route accessed');
    res.send('Hello There!');
  });

//port listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });