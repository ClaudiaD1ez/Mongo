let mongoose = require("mongoose");
let Photo = require("./photoMDB")

Photo.find({name: "Patricia"})
             .then (function(url){
                console.log(url)
                mongoose.disconnect();
             })
             .catch(function()
             {
                console.log("Error")
             })
