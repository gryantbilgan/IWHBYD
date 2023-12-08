const express = require("express");
const router = express.Router();
const spartansCtrl = require("../../controllers/api/spartans");

router.get("/", spartansCtrl.index);
// router.get('/spartans/:id', spartansCtrl.getOneSpartan);
router.post("/generate", spartansCtrl.create);

module.exports = router;
