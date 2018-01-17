const express = require("express");
const Admin = express.Router();
const Meme = require("../models/meme");

// format pictureUrl so it's viewable - not downloaded - from Dropbox
const _formatUrl = (url) => {
    let shareUrl = url.substring(0, url.indexOf("?") + 1);
    return shareUrl += "raw=1";
}

Admin.post("/", (req, res) => {
    req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    const newMeme = new Meme(req.body);
    newMeme.save((err, addedMeme) => {
        if (err) res.status(500).send(err);
        res.send(addedMeme);
    });
});

Admin.put("/:id", (req, res) => {
    req.body.pictureUrl = _formatUrl(req.body.pictureUrl);
    req.body.products.pictureUrl = _formatUrl(req.body.products.pictureUrl);
    Meme.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedMeme) => {
        if (err) res.status(500).send(err);
        res.send(updatedMeme);
    });
});

module.exports = Admin;
