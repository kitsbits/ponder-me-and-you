const express = require("express");
const app = express();
const port = process.env.PORT || 6100;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware \\
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/ponder", {keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true}, (err) => {
    if (err) throw err;
    console.log("*** CONNECTED TO THE PONDER DATABASE ***");
});

app.listen(port, () => {
    console.log(`[+] server is running on port ${port}`);
});
