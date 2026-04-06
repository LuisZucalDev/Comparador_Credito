const express = require('express');
const router = express.Router();
const { obtenerCreditosJSON, renderComparador } = require('../controllers/creditoController');

router.get('/json', obtenerCreditosJSON);
router.get('/', renderComparador);

module.exports = router;
