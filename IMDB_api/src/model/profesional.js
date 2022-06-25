const {Schema, model} = require("mongoose");
const mongoose = require('mongoose')


const profesionalSchema = new mongoose.Schema(
    {
        name: String,
        age: String,
        genre:String,
        nationality:String,
        weight:Number,
        height:Number,
    }
)

module.exports = model("profesionales", profesionalSchema);
