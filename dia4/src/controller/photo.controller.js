let Photo = require("../model/photo")
const connection = require("../database")
const mongoose = require("mongoose")
// IMPORTANTES LAS IMPORTACIONES SIEMPRE SIEMPRE SIEMPRE

function checkRespuesta(err,res){
    if(err){
        console.log("ERROR: " + err)
    }else{
        console.log("documento guardado correctamente");
        console.log(res);
    }
}

// function getPhoto(request,response){
    
// Photo.find({user: "request.body.name"},
//              function(err,photo)
//              {
//             if(err){ 
//                 console.log("Error")
//             }else{
//                 for(i=0;i<photo.length;i++){
//                     console.log(photo[i].url)
//                 }
//             }
//             console.log(photo)
//             response.send(photo)
//         })
// }

function getPhoto(request,response){

    if (request.query.dueno == null){

        Photo.find({})
        .then( (photo) =>
        {
            console.log(photo)
            response.send(photo)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }
    else
    {
        Photo.findById(request.query.dueno)
        .then( (photo) =>
        {
            console.log(photo);
            response.send(photo)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}


function putPhoto(request,response){

    Photo.updateOne({name:request.body.name},
                    {descripcion:request.body.descripcion})

    .then( (photo) =>
    {
        console.log("Photo actualizada correctamente");
        console.log(photo);
        response.send(photo)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

function postPhoto(request,response)
{
    console.log(request.body);

    let photo = new Photo({
                                    name: request.body.name,
                                    dueno:request.body.dueno,
                                    url:request.body.url,
                                    descripcion:request.body.descripcion
                             })
    photo.save()
    .then( (photo) =>
    {
        console.log("Photo guardada correctamente");
        console.log(photo);
        response.send(photo)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}



function deletePhoto(request,response){

        if (request.body.name == null){                   //Dado un usuario eliminar todas sus fotos.
    
            Photo.deleteMany({dueño:"request.body.dueno"})
            .then( (photo) =>
            {
                console.log(photo)
                response.send(photo)
            })
            .catch( (err) =>
            {
                console.log(err);
                process.exit(-1);
            })
        }
        else                                                  //Dado un usuario y un titulo de foto eliminar su foto.
        { 
            Photo.deleteOne({dueño:"request.body.dueno"},{titulo:"request.body.name"})
            .then( (photo) =>
            {
                console.log(photo);
                response.send(photo)
            })
            .catch( (err) =>
            {
                console.log(err);
                process.exit(-1)
            })
        }
    }



module.exports= {getPhoto,putPhoto,postPhoto,deletePhoto};