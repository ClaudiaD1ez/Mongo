const {response} = require("express")
const Movie = require("../model/movies")
const Profesional = require("../model/profesional")
const connection = require ("../database")
const mongoose = require('mongoose')

// function getStart(request, response)
// {
//     let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
//     response.send(respuesta);
// }

// ----------------------------------------------------------------------------

function getProf(request,response){

    if (request.query.id == null){

        Profesional.find({})
        .then( (result) =>
        {
            console.log(result)
            response.send(result)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }
    else
    {
        Profesional.findById(request.query.id)
        .then( (result) =>
        {

            response.send(result)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}

//-----------------------------------------------------------------------------------------

function postProfesional(request,response)
{
    console.log(request.body);

    let profesional = new Profesional({
                                    name: request.body.name,
                                    age:request.body.age,
                                    genre:request.body.genre,
                                    nationality: request.body.nationality,
                                    weight: request.body.weight,
                                    height: request.body.height,
                             })
    console.log(profesional)
    
    profesional.save()
    .then( (profesional) =>
    {
        console.log("Profesional guardado correctamente");
        console.log(profesional);
        response.send(profesional)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// -------------------------------------------------------------------------------------------------

function putProfesional(request,response){

    if(request.query._id != null){

    Profesional.updateOne({$match:{_id:request.query._id}},{$set:
                          {name:request.body.name,
                          age:request.body.age,
                          genre:request.body.genre,
                          nationality:request.body.nationality,
                          weight:request.body.weight,
                          height:request.body.height}})


    .then( (profesional) =>
    {
        console.log("Profesional actualizada correctamente");
        console.log(profesional);
        response.send(profesional)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}}

// ----------------------------------------------------------------------------------------------------------

function deleteProfesional(request,response){

    if (request.query._id != null){
 
        console.log("HOLA")
        
        Profesional.deleteOne({_id:request.query._id})
        .then( (profesional) =>
        {
            console.log(profesional);
            response.send(profesional)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }

    }


module.exports = {getProf, postProfesional,putProfesional,deleteProfesional}