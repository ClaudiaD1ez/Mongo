const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/codenotch')


// 1- Crear esquema 
// 2- Crear una variable con json y datos
// 3- Creo otra variable y le digo que es obj de tipo Student ( como se llame el esquema)
// 4- a ese constructor le paso la variable con los datos 
// 5-uso metodo create con variable student y checkrespuesta


const teacherSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        groups:[String]
    }
)

const subjectSchema = new mongoose.Schema(
    {
        title: String,
        profesores:[teacherSchema]
    }
)

subjectSchema.add({profesores: [teacherSchema]})

const markSchema = new mongoose.Schema(
    {
        date: Date,
        mark: Number,
        asignaturas:[subjectSchema] // Quitar [] / borrar datos / insertar otra vez todo
    }
)

markSchema.add({asignaturas: [subjectSchema]})

const studentSchema = new mongoose.Schema(
    {
        firstName: String,
        lastname: String,
        notas:[markSchema]
    }
)

studentSchema.add({notas: [markSchema]})

// let teacherModel = mongoose.model("teacherArbol",teacherSchema)
// let subjectModel = mongoose.model("subjectArbol", subjectSchema)
// let marktModel = mongoose.model("markArbol", markSchema)
let studentModel = mongoose.model("studentArbol", studentSchema)

// let profesor1 = new teacherModel({first_name:"Pepa", last_name:"Perez",groups:[]})
// let profesor2 = new teacherModel({first_name:"Lolo", last_name:"Lopez",groups:[]})
// let profesor3 = new teacherModel({first_name:"Silvia", last_name:"hugy",groups:[]})
// let profesor4 = new teacherModel({first_name:"Rosa", last_name:"Rosa",groups:[]})



// let asignatura1 = new subjectModel({
//     title:"Literatura",
//     profesores:[profesor1,profesor2]
// })

// let asignatura2 = new subjectModel({
//     title:"Matematicas",
//     profesores:[profesor3,profesor4]
// })

// let nota1 = new marktModel({
//     date: 2022-05-10,
//     mark: 7,
//     asignaturas:[asignatura1]
// })

// let nota2 = new marktModel({
//     date: 2022-03-06,
//     mark: 5,
//     asignaturas:[asignatura2]
// })

// let student1 = new studentModel ({
//     firstName: "Teo",
//     lastname: "Gutierrez",
//     notas:[nota1,nota2]
// })

// profesor1.save(checkRespuesta)
// profesor2.save(checkRespuesta)
// profesor3.save(checkRespuesta)
// profesor4.save(checkRespuesta)

// asignatura1.save(checkRespuesta)
// asignatura2.save(checkRespuesta)

// nota1.save(checkRespuesta)
// nota2.save(checkRespuesta)

// student.save(checkRespuesta)

// function checkRespuesta(err,res){
//     if(err){
//         console.log("ERROR: " + err)
//     }else{
//         console.log("documento guardado correctamente");
//         console.log(res);
//     }
// }


// profesor1.save()
// .then((result) => 
// {
//     console.log("profesor1 guardado")
//     return profesor2.save()
// })
// .then((result) =>
// {
//     console.log("profesor2 guardado")
//     return profesor3.save()
// })
// .then((result) =>
// {
//     console.log("profesor3 guardado")
//     return profesor4.save()
// })
// .then((result) =>
// {
//     console.log("profesor4 guardado")
//     return asignatura1.save()
// })

// let student = mongoose.model("Student", studentSchema);

// studentModel.findOne({first_name: "Teo"},
//              function(err,data)
//              {
//                 if(err){ console.log("Error")
//             }else{
//                 // console.log(data.notas)
//                 for(i=0;i<data.notas.length;i++){
//                     console.log(data.notas[i])
//                 }
//             }
//         })



// studentModel.findOne({first_name: "Teo"},
//     function(err,student)
//     {
//         if(err){ console.log("Error")
//     }else{
//         for(i=0;i<student.notas.length;i++){
//             console.log(student.notas[i].asignaturas)
//         }
//     }
// })



studentModel.findOne({first_name: "Teo"})

    .then((result)=>{
        console.log(result);

        for (let notass of result.notas){
            
        }
    })
    .catch((err)=>{
        console.log(err);
    })

        //     function(err,data)
        //     {
        //     if(err){ console.log("Error")
        // }else{
        //     for(i=0;i<data.profesores.length;i++){
        //         console.log(data.profesores[i].url)
        //     }
        // }
    // })