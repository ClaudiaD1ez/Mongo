const {response} = require("express")
const Peliculas = require("../model/movies")
const Profesional = require("../model/profesional")
const connection = require ("../database")
const mongoose = require('mongoose')

// -----------------------------------------------------------------------------------------------------

function getMovies(request,response){

    if (request.query.id == null){

        Peliculas.find({})
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
        Peliculas.findById(request.query.id)
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

// --------------------------------------------------------------------------------------------------------------

function getActor(request,response){

        Peliculas.findById(request.query.id)
        .then( (result) =>
        {
            response.send(result.actors)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
}

// --------------------------------------------------------------------------------------------------------------

function getDirector(request,response){

    Peliculas.findById(request.query.id)
    .then( (result) =>
    {
        response.send(result.directores)
    })
    .catch( (err) =>
    {
        console.log(err);
        process.exit(-1)
    })
}


// --------------------------------------------------------------------------------------------------------------

function getGuionista(request,response){

    Peliculas.findById(request.query.id)
    .then( (result) =>
    {
        response.send(result.guionistas)
    })
    .catch( (err) =>
    {
        console.log(err);
        process.exit(-1)
    })
}

// --------------------------------------------------------------------------------------------------------------

function getProductora(request,response){

    Peliculas.findById(request.query.id)
    .then( (result) =>
    {
        response.send(result.productora)
    })
    .catch( (err) =>
    {
        console.log(err);
        process.exit(-1)
    })
}

// ---------------------------------------------------------------------------------------------------------

function postMovies(request,response)
{
    console.log(request.body);

    let movie = new Peliculas({
                                    title: request.body.title,
                                    releaseYear:request.body.releaseYear,
                                    actors:request.body.actors,
                                    nationality: request.body.nationality,
                                    directores: request.body.directores,
                                    guionistas: request.body.guionistas,
                                 })
    console.log(movie)
    movie.save()

    .then( (movie) =>
    {
        console.log("pelicula añadida correctamente");
        console.log(movie);
        response.send(movie)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// -------------------------------------------------------------------------------------------------

function postActor(request,response)
{
        // Peliculas.updateOne({$match:{_id:request.query._id}},{$push: {actors: request.body.actors}})
        Peliculas.updateOne({_id:request.query._id},{$push: {actors: request.body.actors}})

    .then( (Peliculas) =>
    {
        console.log("Actor añadido correctamente");
        response.send(Peliculas)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// ---------------------------------------------------------------------------------------------------------------

function postDirector(request,response)
{
        // Peliculas.updateOne({$match:{_id:request.query._id}},{$push: {actors: request.body.actors}})
        Peliculas.updateOne({_id:request.query._id},{$push: {directores: request.body.directores}})

    .then( (Peliculas) =>
    {
        console.log("Actor añadido correctamente");
        response.send(Peliculas)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// ------------------------------------------------------------------------------------------------------

function postGuionista(request,response)
{
        // Peliculas.updateOne({$match:{_id:request.query._id}},{$push: {actors: request.body.actors}})
        Peliculas.updateOne({_id:request.query._id},{$push: {guionistas: request.body.guionistas}})

    .then( (Peliculas) =>
    {
        console.log("Actor añadido correctamente");
        response.send(Peliculas)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}

// --------------------------------------------------------------------------------------------------------


function putPeliculas(request,response){

    if(request.query._id != null){

    Peliculas.updateOne({_id:request.query._id},
                          {$set:{
                            title: request.body.title,
                            releaseYear:request.body.releaseYear,
                            actors:request.body.actors,
                            nationality: request.body.nationality,
                            directores: request.body.directores,
                            guionistas: request.body.guionistas}})

    .then( (Peliculas) =>
    {
        console.log("Profesional actualizada correctamente");
        console.log(Peliculas);
        response.send(Peliculas)
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}}

// -------------------------------------------------------------------------------------------------------


function deletePelicula(request,response){

    if (request.query._id != null){
         
        Peliculas.deleteOne({_id:request.query._id})
        .then( (Peliculas) =>
        {
            console.log(Peliculas);
            response.send(Peliculas)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}

// ---------------------------------------------------------------------------------------------------

function deleteActor(request,response){

    if (request.query._id != null){
         
        Peliculas.updateOne({_id:request.query._id},{$pop: {actors: 1}})
        .then( (Peliculas) =>
        {
            console.log(Peliculas);
            response.send(Peliculas)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}

// --------------------------------------------------------------------------------------------------------

function deleteDirector(request,response){

    if (request.query._id != null){
         
        Peliculas.updateOne({_id:request.query._id},{$pop: {directores: 1}})
        .then( (Peliculas) =>
        {
            console.log(Peliculas);
            response.send(Peliculas)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}

// ----------------------------------------------------------------------------------------------------------------

function deleteGuionista(request,response){

    if (request.query._id != null){
         
        Peliculas.updateOne({_id:request.query._id},{$pop: {guionistas: 1}})
        .then( (Peliculas) =>
        {
            console.log(Peliculas);
            response.send(Peliculas)
        })
        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1)
        })
    }
}


module.exports = {getMovies,getActor,getDirector,getGuionista,getProductora,postMovies,postActor,postDirector,postGuionista,putPeliculas,deletePelicula,deleteActor,deleteDirector,deleteGuionista}