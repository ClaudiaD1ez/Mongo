const {response} = require("express")
const Movie = require("../model/movies")
const Profesional = require("../model/profesional")
const connection = require ("../database")
const mongoose = require('mongoose')
const profesional = require("../model/profesional")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// ----------------------------------------------------------------------------

function getProf(request,response){

    if (request.params.id == null){

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
        Profesional.findById(request.params.id)
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

function postProfesional(request,response){

    let name = request.body.name;
    let age = request.body.age;
    let genre = request.body.genre;
    let nationality = request.body.nationality;
    let weight = request.body.weight;
    let height = request.body.height;

    console.log(name);

    let profesional2 = new profesional(name, age, genre, nationality, weight, height);

    profesional2.save()
    .then((result) => 
    {
        console.log("profesional guardado");
        return profesor2.save()
    })

}


module.exports = {getProf, postProfesional}