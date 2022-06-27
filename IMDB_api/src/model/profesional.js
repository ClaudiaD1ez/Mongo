const {Schema, model} = require("mongoose");
const mongoose = require('mongoose')


const ProfesionalSchema = new mongoose.Schema(
    {
        name: String,
        age: String,
        genre:String,
        nationality:String,
        weight:Number,
        height:Number,
    }
)

module.exports = model("Profesionales", ProfesionalSchema,"profesionales");
