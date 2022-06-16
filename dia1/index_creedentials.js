let mongoose = require("mongoose");
// let Creedentials = require("./MDBcreedentials")
let Creedentials = require("./ValidationCreedentials")

mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/test')

let creedentialsDocument = new Creedentials({
    address:"San bernardo",
    phone:6392,
    email:"micorreo@gmail.com",
})

creedentialsDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err){
        console.log("ERROR: " + err)
    }else{
        console.log("documento guardado correctamente");
        console.log(res);
    }
}