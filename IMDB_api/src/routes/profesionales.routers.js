const {Router} = require("express")
const router = Router();
const profesionalesCtrl = require("../controller/profesionales.controller");


router.get("/Profesional", profesionalesCtrl.getProf);

router.get("/Profesional/:id", profesionalesCtrl.getProf);

router.post("/Profesional", profesionalesCtrl.postProfesional);

// router.put("/Profesional/", profesionalesCtrl.putProfesional);

// router.delete("/Profesional", profesionalesCtrl.deleteProfesional);


module.exports = router