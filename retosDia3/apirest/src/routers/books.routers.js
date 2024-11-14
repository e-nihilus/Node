const { Router } = require("express");
const router = Router();
const bookssCtrl = require("../controller/books.controller");

router.get("/", bookssCtrl.getStart);
router.get("/books", bookssCtrl.getBooks);
router.post("/books", bookssCtrl.postBooks);
router.put("/books", bookssCtrl.putBooks); 
router.delete("/books", bookssCtrl.deleteBooks); 

module.exports = router;
