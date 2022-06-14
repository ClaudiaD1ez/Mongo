let mongoose = require("mongoose");
// let User = require("./MDBuser");
let User = require("./validationUser")

mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/test')

let userDocument = new User({
    login:"Caracola",
    password: "57"
})

userDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err){
        console.log("ERROR: " + err)
    }else{
        console.log("documento guardado correctamente");
        console.log(res);
    }
}