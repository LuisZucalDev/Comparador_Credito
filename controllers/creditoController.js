const Credito = require('../models/credito');

exports.obtenerCreditos = async (req, res) => {
  try {
    const datos = await Credito.find();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener créditos', error });
  }
};
