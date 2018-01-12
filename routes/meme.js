const express = require("express");
const addMeme = express.Router();
const Meme = require("../models/meme");

// format pictureUrl so it's viewed, not downloaded from Dropbox
const _formatUrl = (url) => {
    let shareUrl = url.substring(0, url.indexOf("?") + 1);
    return shareUrl += "raw=1";
}

addMeme.post("/", (req, res) => {
    req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    const newMeme = new Meme(req.body);
    newMeme.save((err, addedMeme) => {
        if (err) res.status(500).send(err);
        res.send(addedMeme);
    });
});

module.exports = addMeme;
