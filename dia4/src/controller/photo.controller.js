const connection = require ("../database")

function getStart(request, response)
{
    let respuesta = {error:true, codigo:200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// -----------------------------------------------------------------------------------------------

function getPhotos(request, response)
{
    if(request.query.id == null)
    {
        PhotoModel.find({})
        .then( (photo) =>
        {
            console.log(photo);
            response.send(photo)
        })
        .catch( (err) =>
        {
            console.log(err);
        })
    }
    else
    {
        PhotoModel.findById(request.query.id)
        .then( (photo) => 
        {
            console.log(photo)
            response.send(photo)
        })
        .catch( (err) =>
        {
            console.log(err)
        })
    }
}

// --------------------------------------------------------------------------------------------------------------


module.exports = {getStart,getPhotos,postPhotos}