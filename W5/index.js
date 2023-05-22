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
app.post("/c/", async (req, res) => {
    try {
        let dataToStore = await songSchema.create(req.body);
        dataToStore = dataToStore.toObject();
        res.status(200).json({ "Data": dataToStore });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/d/", async(req, res) => {
    try {
        let data = await songSchema.find();
        res.status(200).json({"Size" : data.length, "Data" : data});
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/e/:director", async (req, res) => {
    try {
        let director = req.params.director;
        const query = {Music_director: director};
        let data = await songSchema.find(query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/f/:director/:singer", async (req, res) => {
    try {
        let director = req.params.director;
        let singer = req.params.singer;
        const query = {Music_director: director, Singer:singer};
        let data = await songSchema.find(query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/g/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await songSchema.findByIdAndDelete(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/i/:singer/:film", async (req, res) => {
    try {
        let film = req.params.film;
        let singer = req.params.singer;
        const query = {Film: film, Singer:singer};
        let data = await songSchema.find(query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/j/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let data = await songSchema.findOneAndUpdate({_id:id}, {$set: {Actor:req.body.Actor, Actress:req.body.Actress}}, {new:true});
        data = data.toObject();
        res.status(200).json({ "Updated Data": data});
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/k/", async (req, res) => {
    try {
        let data = await songSchema.find();
        let html = "<table border=1 style='border-collapse: collapse'>";
        html = html + `<tr> <th> Song Name</th> <th> Film Name</th> <th> Music Director</th> <th> Singer </th> <th> Actor</th><th> Actress</th> </tr>`
        data.map(function(song) {
            if(song.Actor == null) {
                song.Actor = "-";
            }
            if(song.Actress == null) {
                song.Actress = "-";
            }
            html = html + "<tr>";
            html = html + "<td>" + song.Songname + "</td>";
            html = html + "<td>" + song.Film + "</td>";
            html = html + "<td>" + song.Music_director + "</td>";
            html = html + "<td>" + song.Singer + "</td>";
            html = html + "<td>" + song.Actor + "</td>";
            html = html + "<td>" + song.Actress + "</td>";
            html = html + "</tr>";
        });
        html = html + "</table>";

        res.send(html);
    } catch (error) {
        res.status(500).send(error);
    }
});