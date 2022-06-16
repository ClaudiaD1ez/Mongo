const {Router} = require("express")
const photosCtrl = require("../controller/photos.controller");

const router = Router();

router.get("/photos", photosCtrl.getPhotos);

router.post("/photos", photosCtrl.postPhotos);

router.put("/photos", photosCtrl.putPhotos);

router.delete("/photos", photosCtrl.deletePhotos);

router.get("/", photosCtrl.getStart);



module.exports = router