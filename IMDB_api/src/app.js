const express = require("express")
const cors = require('cors')
const profesionalesRouters   = require("./routes/profesionales.routers")
const moviesRouters = require('./routes/movies.routers')
const errorHandLing    = require("./error/errorHandling")
const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(profesionalesRouters);
app.use(moviesRouters);
app.use(function(req,res, next){

    res.status(404).json({error:true,
                          codigo:404,
                          message: "Endpoint doesnt found"})
})

app.use(errorHandLing);

module.exports = app;