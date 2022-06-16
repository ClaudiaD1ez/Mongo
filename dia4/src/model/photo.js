const{Schema,model} = require("mongoose");

const PhotoSchema = new Schema(
    {
         user:String,
         url:String,
         titulo:String,
         descripcion:String
    })

module.exports = model("Photo", PhotoSchema,"user");