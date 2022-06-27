const {Schema, model} = require("mongoose");
const mongoose = require('mongoose')


const peliculasSchema = new mongoose.Schema(
    {
        title: String,
        releaseYear: String,
        actors:[String],
        nationality:String,
        directores:[String],
        guionistas:[String],
    }
)

module.exports = model("Peliculas",peliculasSchema,"peliculas")