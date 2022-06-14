const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema ({
    name:{
        type: String,
        enum:["Maria","Mario","Miguel"]
    },
    surname:{    
        type: String,
    }

})

ProfileSchema.pre('save',function(next){
    console.log("Middleware de entrada");
    if(this.name.type==String && this.surname.type==String){
        console.log("Formato correcto")
        next()
    }else{
        console.log("El formato debe ser de texto")
    }

    if(this.name == "Maria" ||this.name == "Mario" ||this.name == "Miguel"){
        console.log("El nombre es una opcion correcta")
        next()
    }else{
        console.log("El nombre no es una opcion correcta")
    }
})

module.exports = mongoose.model("ValidationProfile", ProfileSchema,"profile")
