const express = require("express");
const mongoose = require("mongoose");
const songSchema = require("./songDetails.js");

const app = express();

app.use(express.json());


// TEST
app.listen(8000, () => {
    console.log("Server live");
});

app.get("/", (req, res) => {
    res.status(200).send("This is WAD5 Server");
});


// ConnectDatabase
const connectDatabase = () => {
    var url = "mongodb://localhost:27017";
    mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true },)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}
connectDatabase();


// Operations at endpoints
app.post("/addSong/", async (req, res) => {
    try {
        let dataToStore = await songSchema.create(req.body);
        dataToStore = dataToStore.toObject();
        res.status(200).json({ "Data": dataToStore });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/getAllSongs/", async(req, res) => {
    try {
        let data = await songSchema.find();
        res.status(200).json({"Size" : data.length, "Data" : data});
    } catch (error) {
        res.status(500).send(error);
    }
});
