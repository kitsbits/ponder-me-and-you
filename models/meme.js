const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    pictureUrl: {
        type: String,
        required: true
    },
    products: [{
        productType: {
        type: String,
        enum: ["Framed", "Unframed", "Canvas"]
        },
        price: Number,
        pictureUrl: String,
        description: String
    }]
}, { timestamps: true });

module.exports = mongoose.model("Meme", memeSchema);
