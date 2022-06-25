let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://claudiaDiez:codenotch@cluster0.x7k6b.mongodb.net/IMDB',
                {useNewUrlParser: true,
                useUnifiedTopology: true})

.then( (db)=>{
    console.log("database connected on" + db.connection.host)
})
.catch((error)=>{
    console.log(error)
})