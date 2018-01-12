const express = require("express");
const homePage = express.Router();
const Meme = require("../models/meme");

homePage.get("/", (req, res) => {
    Meme.find((err, memes) => {
        if (err) res.status(500).send(err);
        res.send(memes);
    })
});

module.exports = homePage;
