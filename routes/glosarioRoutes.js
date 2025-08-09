const express = require('express');
const router = express.Router();
const { obtenerGlosario } = require('../controllers/glosarioController');

router.get('/', obtenerGlosario);

module.exports = router;
