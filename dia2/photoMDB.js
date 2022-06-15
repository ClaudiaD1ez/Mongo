const mongoose = require("mongoose")

const PhotoSchema = new mongoose.Schema({
    user:String,
    url:String,
    titulo:String,
    descripcion:String,
})

module.exports = mongoose.model("photo", PhotoSchema,"photo")