const express = require('express');
const router = express.Router();
const { obtenerFaq} = require('../controllers/faqController');

router.get('/', obtenerFaq);

module.exports = router;
