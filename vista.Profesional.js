
function mostrarProfesionales(){
    document.getElementById('profesionales').style.display = 'block'
    document.getElementById('movies').style.display = 'none'
 }
 function mostrarMovies(){
     document.getElementById('movies').style.display = 'block'
     document.getElementById('profesionales').style.display = 'none'
 }

//  -----------------------------------------------------------------------------------------

class Profesional{
    constructor(name,age,genre,nationality,weight,height){ 

        this.name=name;
        this.age = age;
        this.genre = genre;
        this.nationality = nationality;
        this.weight = weight;
        this.height = height
    }

}




//  -------------------------------------------------------------------------------------


async function mostrarProf(){
    let url
    let id = document.getElementById("_id").value
   
    if(id == ""){
        url = "http://localhost:3000/Profesional"
    }else{
        url = `http://localhost:3000/Profesional?_id=${id}`;
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
            ` <p>Nombre:              ${result[0].name}</p>
             <p>Edad:                 ${result[0].age}</p>
             <p>Genero:               ${result[0].genre}</p>
             <p>Nacionalidad:         ${result[0].nationality}</p>
             <p>Peso:                 ${result[0].weight}</p>
             <p>Altura:               ${result[0].height}</p>`
             
             document.getElementById("mostrar").innerHTML += imprimirTodo

        }else{
            console.log("mostrar Todos")
            

            for(i=0 ; i<result.length ; i++){

                let imprimirTodo =
               `<p>Nombre:        ${result[i].name}</p>
                <p>Edad:          ${result[i].age}</p>
                <p>Genero:        ${result[i].genre}</p>
                <p>Nacionalidad:  ${result[i].nationality}</p>
                <p>Peso:          ${result[i].weight}</p>
                <p>Altura:        ${result[i].height}</p>`
                
                document.getElementById("mostrar").innerHTML += imprimirTodo
             }
        }


    }catch(err){
        console.log(err)
    }
}

// ---------------------------------------------------------------------------------------------

async function crearProf(){

        try{
    
            let nombre = document.getElementById("nombre").value;
            let edad = document.getElementById("edad").value;
            let genero = document.getElementById("genero").value;
            let nacionalidad = document.getElementById("nacionalidad").value;
            let peso = document.getElementById("peso").value;
            let altura = document.getElementById("altura").value;

    
        let nuevoProf = new Profesional (nombre, edad, genero,nacionalidad, peso, altura)
    
    
        const url = 'http://localhost:3000/Profesional'
    
                let param = {
                    "headers":{"content-type":"application/json; charset= UTF-8"},
                    "body": JSON.stringify(nuevoProf),
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
                        console.log("Profesional creado correctamente")} 
    
                            
             }catch(error){
              console.log(error)
            }
        }

// --------------------------------------------------------------------------------------------

async function actualizarProf(){

        try{
            
            let id = document.getElementById("_id").value
            let nombre = document.getElementById("nombre").value;
            let edad = document.getElementById("edad").value;
            let genero = document.getElementById("genero").value;
            let nacionalidad = document.getElementById("nacionalidad").value;
            let peso = document.getElementById("peso").value;
            let altura = document.getElementById("altura").value;

    
        let nuevoProf = new Profesional (nombre, edad, genero,nacionalidad, peso, altura)
    
    
        let url = `http://localhost:3000/Profesional?_id=${id}`;
    
                let param = {
                    "headers":{"content-type":"application/json; charset= UTF-8"},
                    "body": JSON.stringify(nuevoProf),
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
                        console.log("Profesional creado correctamente")} 
    
                            
             }catch(error){
              console.log(error)
            }
        }


        // --------------------

        async function borrarProf(){
            let url
            let id = document.getElementById("_id").value

            console.log(id)
           
                url = `http://localhost:3000/Profesional?_id=${id}`;
            
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
        