const express = require("express");
const app = express();
const port = 1337;
const wordCounter = require("./models/wordCounter.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("test");
});

app.post("/", (req, res) => {
    if(!req.body.text) {return res.status(400).json({error: "Need to enter a text in text field"});}
    wordCounter.count(res, req.body);
});

app.listen(port, () => {
    console.log(`Api running on port ${port}`);
});
