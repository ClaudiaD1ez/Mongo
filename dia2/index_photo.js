let mongoose = require("mongoose");
let Photo = require("./photoMDB")

mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/codenotch')

function checkRespuesta(err,res){
    if(err){
        console.log("ERROR: " + err)
    }else{
        console.log("documento guardado correctamente");
        console.log(res);
    }
}

// let photo1 = new Photo({
//     user:"Patricia",
//     url:"https://www.softzone.es/app/uploads-softzone.es/2020/06/Foto-blanco-y-negro-a-color.jpg?x=480&y=375&quality=40",
//     titulo:"Paisaje atardecer",
//     descripcion:"Foto de un atardecer en blanco y negro y en color",
// })


// let photo2 = new Photo({
//     user:"Patricia",
//     url:"https://www.adobe.com/es/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium",
//     titulo:"Flamencos",
//     descripcion:"Foto colorida de dos flamencos",
// })

// let photo3 = new Photo({
//     user:"Marco",
//     url:"https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/450_1000.jpeg",
//     titulo:"Retrato a contraluz",
//     descripcion:"Retrato d eun hombre sobre luz azul",
// })

// let photo4 = new Photo({
//     user:"Leo",
//     url:"https://ichef.bbci.co.uk/news/640/cpsprodpb/35F4/production/_116221831_mediaitem116221830.jpg",
//     titulo:"Pinguinos amor",
//     descripcion:"Dos pinguinos mirando el paisaje",
// })


// photo1.save(checkRespuesta)
// photo2.save(checkRespuesta)
// photo3.save(checkRespuesta)
// photo4.save(checkRespuesta)

// function checkRespuesta(err,res){
//     if(err){
//         console.log("ERROR: " + err)
//     }else{
//         console.log("documento guardado correctamente");
//         console.log(res);
//     }
// }



// Photo.find({user: "Patricia"},
//              function(err,photo)
//              {
//                 if(err){ console.log("Error")
//             }else{
//                 for(i=0;i<photo.length;i++){
//                     console.log(photo[i].url)
//                 }
//             }
//         })

// Photo.deleteOne({user:"Marco"},{titulo:"Retrato a contraluz"})
//         .then(function(items)
//         {
//             console.log("Borrado")
//             console.log(items)
//         })
//         .catch(function(){
//             console.log("Error")
//         })

// Photo.deleteMany({user:"Patricia"})
//         .then(function(items)
//         {
//             console.log("Borrado")
//             console.log(items)
//         })
//         .catch(function(){
//             console.log("Error")
//         })


// Photo.updateOne({titulo:"Pinguinos amor"},{descripcion:"Dos pinguinos de espaldas abrazandose"},checkRespuesta)