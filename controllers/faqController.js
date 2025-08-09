const Faq = require('../models/faq');

exports.obtenerFaq = async (req, res) => {
  try {
    const datos = await Faq.find();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener FAQ', error });
  }
};
