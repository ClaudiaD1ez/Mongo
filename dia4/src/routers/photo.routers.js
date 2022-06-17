const {Router} = require ("express")
const router = Router(); // crear un objeto de la clase Router
const photoCtrl = require("../controller/photo.controller") // importamos los controllers ( antes tenemos que exportar en la carpeta controllers)

router.get("/photos", photoCtrl.getPhoto);

router.get("/photos/dueno", photoCtrl.getPhoto);

router.post("/photos", photoCtrl.postPhoto);

// router.put("/photos/name/descripcion", photoCtrl.putPhoto);
router.put("/photos", photoCtrl.putPhoto);


router.delete("/photos", photoCtrl.deletePhoto);


module.exports = router