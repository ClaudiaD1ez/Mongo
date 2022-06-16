let mongoose = require("mongoose");
// let Profile = require("./MDBprofile")
let Profile = require("./validationProfile")

mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/test')

let profileDocument = new Profile({
    name:"Carmen",
    surname:"Perez",
    dateOfBirth:"02/Jun/1992",
    Comments: "blabla",
    rol:"User"
})

profileDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err){
        console.log("ERROR: " + err)
    }else{
        console.log("documento uardado correctamente");
        console.log(res);
    }
}