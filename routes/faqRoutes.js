const express = require('express');
const router = express.Router();
const { obtenerFaqJSON, renderFaq } = require('../controllers/faqController');

router.get('/json', obtenerFaqJSON);
router.get('/', renderFaq);

module.exports = router;
