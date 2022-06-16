const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address:{
        type: String,
    },
    phone:{
        type: Number,
        validate: [
            function(phone){ return phone.length == 9 },
            "El numero de telefono está incompleto"
        ],
        select:false
    },
    email:{
        type:String,
    }
})

CreedentialsSchema.pre('save',function(next){
    console.log("Middleware de entrada");
    if(this.phone.length == 9){
        console.log("Numero acepato")
        next()
    }else{
        console.log("numero demasiado corto")
    }
})

module.exports = mongoose.model("ValidationCreedentials", CreedentialsSchema,"creedentials")
