const Glosario = require('../models/glosario');

exports.obtenerGlosario = async (req, res) => {
  try {
    const datos = await Glosario.find();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener glosario', error });
  }
};
