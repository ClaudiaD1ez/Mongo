const mongoose = require("mongoose")
const { object } = require("webidl-conversions")
mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/codenotch')

// 1- Crear esquema 
// 2- Crear una variable con json y datos
// 3- Creo otra variable y le digo que es obj de tipo Student ( como se llame el esquema)
// 4- a ese constructor le paso la variable con los datos 
// 5-uso metodo create con variable student y checkrespuesta

//1-CREAR SCHEMA 

const teacherSchema = new mongoose.Schema(
    {
            teacher_first_name: String,
            teacher_last_name: String
    }
)


const markSchema = new mongoose.Schema(
    {
        // id: object.id,
        date: Date,
        mark: Number,
        student_first_name: String,
        student_last_name: String,
        group_name: String,
        subject_name: String,
        teachers:[teacherSchema]
    }
)

markSchema.add({teachers: [teacherSchema]})

let marks = mongoose.model("Marks", markSchema);
let teacher = mongoose.model("Teacher", markSchema);

// 2- CREAR UNA VARIABLE JSON CON DATOS

// let nota1 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-07,
//         mark: 5,
//         student_first_name: "Juan",
//         student_last_name: "Perez",
//         group_name: "Presencial",
//         subject_name: "Lengua",
//         teachers:[{
//             teacher_first_name: "Mariana",
//             teacher_last_name: "Martinez"
//         }]
//     }
// )

// let nota2 = new marks(
//     {
//         // id: object.id,
//         date: 2022-04-11,
//         mark: 1,
//         student_first_name: "Pepe",
//         student_last_name: "Guitierrez",
//         group_name: "On-line",
//         subject_name: "Literatura",
//         teachers:[{
//             teacher_first_name: "Antonio",
//             teacher_last_name: "Alcaraz"
//         }]
//     }
// )
// let nota3 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-07,
//         mark: 9,
//         student_first_name: "Jacinta",
//         student_last_name: "San Agustin",
//         group_name: "Presencial",
//         subject_name: "Ingles",
//         teachers:[{
//             teacher_first_name: "Tomas",
//             teacher_last_name: "Serrano"
//         }]
//     }
// )
// let nota4 = new marks(
//     {
//         // id: object.id,
//         date: 2022-07-01,
//         mark: 6,
//         student_first_name: "Lola",
//         student_last_name: "Carrasco",
//         group_name: "On-line",
//         subject_name: "Lengua",
//         teachers:[{
//             teacher_first_name: "Mariana",
//             teacher_last_name: "Martinez"
//         }]
//     }
// )
// let nota5 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-07,
//         mark: 6,
//         student_first_name: "Jaime",
//         student_last_name: "Palacios",
//         group_name: "Presencial",
//         subject_name: "Ingles",
//         teachers:[{
//             teacher_first_name: "Tomas",
//             teacher_last_name: "Serrano"
//         }]
//     }
// )

// let nota6 = new marks(
//     {
//         // id: object.id,
//         date: 2022-12-07,
//         mark: 4,
//         student_first_name: "Nuria",
//         student_last_name: "Castan",
//         group_name: "On-line",
//         subject_name: "Literatura",
//         teachers:[{
//             teacher_first_name: "Antonio",
//             teacher_last_name: "Alcaraz"
//         }]
//     }
// )
// let nota7 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-12,
//         mark: 5,
//         student_first_name: "Teresa",
//         student_last_name: "Catalan",
//         group_name: "Presencial",
//         subject_name: "Ingles",
//         teachers:[{
//             teacher_first_name: "Tomas",
//             teacher_last_name: "Serrano"
//         }]
//     }
// )
// let nota8 = new marks(
//     {
//         // id: object.id,
//         date: 2022-09-07,
//         mark: 8,
//         student_first_name: "Raquel",
//         student_last_name: "Lianda",
//         group_name: "On-line",
//         subject_name: "Lengua",
//         teachers:[{
//             teacher_first_name: "Mariana",
//             teacher_last_name: "Martinez"
//         }]
//     }
// )
// let nota9 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-07,
//         mark: 5,
//         student_first_name: "Miguel",
//         student_last_name: "Noguera",
//         group_name: "Presencial",
//         subject_name: "Literatura",
//         teachers:[{
//             teacher_first_name: "Antonio",
//             teacher_last_name: "Alcaraz"
//         }]
//     }
// )
// let nota10 = new marks(
//     {
//         // id: object.id,
//         date: 2022-02-07,
//         mark: 10,
//         student_first_name: "Fernando",
//         student_last_name: "Fernandez",
//         group_name: "Presencial",
//         subject_name: "Lengua",
//         teachers:[{
//             teacher_first_name: "Mariana",
//             teacher_last_name: "Martinez"
//         }]
//     }
// )

// let notaModel = new marks(nota1)
// marks.create(notaModel, checkRespuesta);


// function checkRespuesta(err,res){
//     if(err){
//         console.log("ERROR: " + err)
//     }else{
//         console.log("documento guardado correctamente");
//         console.log(res);
//     }
// }

// nota1.save(checkRespuesta)
// nota2.save(checkRespuesta)
// nota3.save(checkRespuesta)
// nota4.save(checkRespuesta)
// nota5.save(checkRespuesta)
// nota6.save(checkRespuesta)
// nota7.save(checkRespuesta)
// nota8.save(checkRespuesta)
// nota9.save(checkRespuesta)
// nota10.save(checkRespuesta)


// Calcular la nota media de los alumnos de una asignatura concreta.-----------------------------------------------------------

// marks
// .aggregate([{$match: {subject_name: "Ingles"}},
//             {$group: {"_id":{"subject_name":"Ingles"} , "Nota Media": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos. ----------------------------------------

// marks
// .aggregate([{$count: "Numero de alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos. ------------------------------------------------------------

// marks
// .aggregate([{$project: {"Nombre": "$student_first_name", 
//                          "apellido": "$student_last_name",
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.------------------------------------------------------

// marks
// .aggregate([{$project: {"Nombre": "$teachers.teacher_first_name", 
//                         "apellido": "$teachers.teacher_last_name",
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.----------------------------------------


// marks
// .aggregate([{$group: {"_id": {"Grupo" : "$group_name"}, 
//                       "Cantidad": {"$sum": 1}}},
//                       {$sort: {"group_name": -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


//Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.-----------------------------------------------------

// marks
// .aggregate([{$group: {"_id":{subject_name:"$subject_name"} , "Nota Media": {"$avg": "$mark"}}},
//             {$match:{"Nota Media": {"$gt": 5}}},
//             {$limit: 1}])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.----------------------------NO--------------------------

// marks
// .aggregate([{$unwind: "$teachers"},
//             {$group: {"_id": {"Asignatura" : "$subject_name"}, 
//                       "Cantidad": {"$sum": 1}}},
//                     ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


/////////////////////
///// RETO2
////////////////////

//Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
//tenga fecha del año pasado o anterior.

// marks
// .aggregate([{$match: {"$or":[{"mark": {"$gt":8}},
//                              {"date":{"$lt":new Date(2022,01,01)}}]}},
//             {$project: {"Nombre": "$student_first_name", 
//                         "Apellido": "$student_last_name",
//                         "Nota":"$mark",
//                          _id: 0}},
// ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// Obtén la media de las notas que se han dado en el último año por asignatura.-------------------------------------------------------

// marks
// .aggregate([
//             {$match:{"$and":[{"date":{"$gt":new Date(2022,01,01)}},
//                              {"date":{"$lt":new Date(2022,12,31)}}]}},
//             {$group: {"_id":{subject_name:"$subject_name"} , "Nota Media": {"$avg": "$mark"}}},
// ])


// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.--------------------------------------

// marks
// .aggregate([
//             {$match:{"$and":[{"date":{"$gt":new Date(2022,01,01)}},
//                              {"date":{"$lt":new Date(2022,12,31)}}]}},
//             {$group: {"_id":{Alumno:"$student_first_name"} , 
//                       "Nota Media": {"$avg": "$mark"}}},
// ])


// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor----------------------------------------
// sea uno que elijáis.

// marks
// .aggregate([
//             {$unwind: "$teachers"},
//             {$match: {"teachers.teacher_first_name": "Mariana"}},
//             {$group: {"_id": "$student_first_name", 
//                         "Cantidad": {"$sum": 1}}},
//  ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })
