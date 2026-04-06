const express = require('express');
const router = express.Router();
const { obtenerGlosarioJSON, renderGlosario } = require('../controllers/glosarioController');

router.get('/json', obtenerGlosarioJSON);
router.get('/', renderGlosario);

module.exports = router;
