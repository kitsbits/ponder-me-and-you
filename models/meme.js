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
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
}, { timestamps: true });

module.exports = mongoose.model("Meme", memeSchema);
