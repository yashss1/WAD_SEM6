const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDatabase = require('./database/connection.js');

const studentRouter = require('./routers/student_router.js');

const app = express();
app.use(express.json());
app.use(cors());

connectDatabase();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Live");
});

app.get("/", (req, res) => {
    res.status(200).send("This is WAD1 Server");
});

app.use("/", studentRouter);



/*
start db -> brew services start mongodb-community@6.0
npm start
use postman to test queries
*/