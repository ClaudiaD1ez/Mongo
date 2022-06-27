const {Router} = require("express")
const moviesCtrl = require("../controller//movies.controller");

const router = Router();

router.get("/Movies", moviesCtrl.getMovies);

router.get("/Movies/actor",moviesCtrl.getActor);

router.get("/Movies/director",moviesCtrl.getDirector);

router.get("/Movies/productora",moviesCtrl.getProductora);

router.post("/Movies", moviesCtrl.postMovies);

router.post("/Movies/actor", moviesCtrl.postActor);

router.post("/Movies/directores", moviesCtrl.postDirector);

router.post("/Movies/guionista", moviesCtrl.postGuionista);

router.put("/Movies", moviesCtrl.putPeliculas);

router.delete("/Movies", moviesCtrl.deletePelicula);

router.delete("/Movies/actor", moviesCtrl.deleteActor);

router.delete("/Movies/director", moviesCtrl.deleteDirector);

router.delete("/Movies/guionista", moviesCtrl.deleteGuionista);


module.exports = router