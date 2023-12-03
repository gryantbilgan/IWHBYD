const express = require('express');
const router = express.Router();
const spartansCtrl = require('../../controllers/api/spartans');

router.get('/spartans', spartansCtrl.getAllSpartans);
router.get('/spartans/:id', spartansCtrl.getOneSpartan);
router.post('/spartans/generate', spartansCtrl.createSpartan);


module.exports = router;