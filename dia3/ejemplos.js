//EQUIVALENCIA SELECT con solo unos campos y no mostrar el campo id
// AutorModel
// .aggregate([{$project: {"Nombre": "$nombre", 
//                          edad: 1,
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

//EQUIVALENCIA al WHERE
// AutorModel
// .aggregate([{$match: {nombre: "Pepin"}}])
// .then((result) =>
// {
//     console.log(result);
//    //fs.writeFileSync("autores.json", JSON.stringify(result))
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// EQUIVALENCIA al COUNT
// AutorModel
// .aggregate([{$count: "Numero de Autores"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// AutorModel
// .aggregate([{$match:{nombre: "Pepin"}},
//             {$count: "Numero de Autores con nombre Pepin"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA DISTINCT
// AutorModel
// .distinct("nombre")
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


//EQUIVALENCIA SUM
// AutorModel
// .aggregate([{$group: {"_id": null, "Edad Total": {"$sum": "$edad"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// EQUIVALENCIA AVG
// AutorModel
// .aggregate([{$group: {"_id": null, "Edad Media": {"$avg": "$edad"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// EQUIVALENCIA AND y OR
// AutorModel
// .aggregate([{$match: {"$and":[{edad: {"$gte": 200}},
//                               {"$or": [{nombre:"Sara"},
//                                        {"direccion.calle":"Hermandad"}
//                                        ]
//                               }
//                              ]
//                      } 
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA GROUP BY. Contar el número de veces que aparece cada nombre
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                      "Cantidad": {"$sum": 1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA HAVING. Contar el número de veces que aparece cada nombre si esta cantidad es mayor que 1
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gt": 1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA ORDER BY. Igual que el anterior pero en orden ascencente
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gt": 1}}},
//             {$sort: {"Cantidad": 1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA ORDER BY. Igual que el anterior pero en orden descendente
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {"$match": {"Cantidad": {"$gt": 1}}},
//             {"$sort": {"Cantidad": -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA LIMIT. Igual que el anterior pero que solo muestre un valor
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gt": 1}}},
//             {$sort: {"Cantidad": -1}},
//             {$limit: 1}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Skip
// AutorModel
// .aggregate([{$skip: 3}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Unwind
// AutorModel
// .aggregate([{$match: {_id:mongoose.Types.ObjectId("62a87ffe6dcbb35904b679e2")}},
//             {$unwind: "$libros"}
//         ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


