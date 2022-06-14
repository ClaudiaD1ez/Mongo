const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login:{
        type: String,
    },
    password:{
        type: String,
        validate:[
            function(password){
                return password.length >5;
            },
            "La contraseña debe tener 6 o mas caracteres"],
             select: false //Al consultar los datos nunca aparecera la contraseña
    }
})

UserSchema.pre('save',function(next){
    console.log("Middleware de entrada");
    if(this.password.length > 5){
        console.log("contraseña aceptable")
        next()
    }else{
        console.log("la contraseña es muy corta")
    }
});

module.exports = mongoose.model("validationUser", UserSchema,"user")
