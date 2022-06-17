const {Schema,model} = require("mongoose");

const PhotoSchema = new Schema(
    {
        name:String,
        dueno:String,
        url:String,
        descripcion:String
    }
)

module.exports = model("Photo", PhotoSchema,"photo")