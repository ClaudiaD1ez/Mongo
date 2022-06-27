
function mostrarProfesionales(){
    document.getElementById('profesionales').style.display = 'block'
    document.getElementById('movies').style.display = 'none'
 }
 function mostrarMovies(){
     document.getElementById('movies').style.display = 'block'
     document.getElementById('profesionales').style.display = 'none'
 }

//  -----------------------------------------------------------------------------------------

class Movie{
    constructor(title,releaseYear,actors,nationality,directores,guionistas){ 

        this.title=title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.directores = directores;
        this.guionistas = guionistas
    }

}

//  -------------------------------------------------------------------------------------

async function getMovies(){
    let url
    let id = document.getElementById("_idd").value
    console.log(id)
   
    if(id == ""){
        url = "http://localhost:3000/Movies"
    }else{
        url = `http://localhost:3000/Movies?id=${id}`;
    }
     
    let params={
        headers:{"content-type":"application/json; charset=UTF-8",
        method:"GET"}
    }

    try{
        let data = await fetch(url,params)
        let result = await data.json()

        console.log(result)

        if(id != ""){
            console.log("mostrar uno")
           
            let imprimirTodo =
            // `<p>Id del profesional:   ${result[0].students_id}</p>
            ` <p>Titulo:              ${result.title}</p>
             <p>Año:                  ${result.releaseYear}</p>
             <p>Actores:              ${result.actors}</p>
             <p>Nacionalidad:         ${result.nationality}</p>
             <p>Directores:           ${result.directores}</p>
             <p>Guionistas:           ${result.guionistas}</p>`
             
             document.getElementById("mostrar").innerHTML += imprimirTodo

        }else{
            console.log("mostrar Todos")
            

            for(i=0 ; i<result.length ; i++){

                let imprimirTodo =
               `<p>Titulo:               ${result[i].title}</p>
                <p>Año:                  ${result[i].releaseYear}</p>
                <p>Actores:              ${result[i].actors}</p>
                <p>Nacionalidad:         ${result[i].nationality}</p>
                <p>Directores:           ${result[i].directores}</p>
                <p>Guionistas:           ${result[i].guionistas}</p>`
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        }


    }catch(err){
        console.log(err)
    }
}

// --------------------------------------------------------------------------------------------------------------

async function postMovies(){

    try{

        let titulo = document.getElementById("titulo").value;
        let año = document.getElementById("año").value;
        let actores = document.getElementById("actores").value;
        let nacionalidad = document.getElementById("nacionalidad").value;
        let directores = document.getElementById("directores").value;
        let guionistas = document.getElementById("guionistas").value;


    let nuevapeli = new Movie (titulo, año, actores,nacionalidad, directores, guionistas)


    const url = 'http://localhost:3000/Movies'

            let param = {
                "headers":{"content-type":"application/json; charset= UTF-8"},
                "body": JSON.stringify(nuevapeli),
                "method": "POST"
            }
            
            let data = await fetch(url, param)    
            console.log(data);
              
            let resultado = await data.json()
            console.log(resultado)
            console.log(resultado.error)    
                if(resultado.error){         
                    console.log("error")   
                }else{
                    console.log("Pelicula creada correctamente")} 

                        
         }catch(error){
          console.log(error)
        }
    }

// --------------------------------------------------------------------------------------------

async function actualizarMovie(){

    try{
        
        let id = document.getElementById("_idd").value
        let titulo = document.getElementById("titulo").value;
        let año = document.getElementById("año").value;
        let actores = document.getElementById("actores").value;
        let nacionalidad = document.getElementById("nacionalidad").value;
        let directores = document.getElementById("directores").value;
        let guionistas = document.getElementById("guionistas").value;


    let nuevaPeli2 = new Movie (titulo, año, actores, nacionalidad, directores, guionistas)


    let url = `http://localhost:3000/Movies?_id=${id}`;

            let param = {
                "headers":{"content-type":"application/json; charset= UTF-8"},
                "body": JSON.stringify(nuevaPeli2),
                "method": "PUT"
            }
            
            let data = await fetch(url, param)    
            console.log(data);
              
            let resultado = await data.json()
            console.log(resultado)
            console.log(resultado.error)    
                if(resultado.error){         
                    console.log("error")   
                }else{
                    console.log("Pelicula actualizada correctamente")} 

                        
         }catch(error){
          console.log(error)
        }
    }


    // -----------------------------------------------------------------------------------------------

    async function borrarMovie(){
        let url
        let id = document.getElementById("_idd").value

        console.log(id)
       
            url = `http://localhost:3000/Movies?_id=${id}`;
        
        let params={
            headers:{"content-type":"application/json; charset=UTF-8"},
            method:"DELETE"
        }
    
        try{
            let data = await fetch(url,params)
            let result = await data.json()
    
            console.log(result)

    
        }catch(err){
            console.log(err)
        }
    }
    