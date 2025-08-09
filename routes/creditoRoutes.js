const express = require('express');
const router = express.Router();
const { obtenerCreditos } = require('../controllers/creditoController');

router.get('/', obtenerCreditos);

module.exports = router;
