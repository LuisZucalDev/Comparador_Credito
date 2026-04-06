const mockData = global.mockData;

exports.obtenerGlosarioJSON = async (req, res) => {
  try {
    const glosario = mockData.mockGlosario;
    res.json(glosario);
  } catch (error) {
    console.error('Error glosario JSON:', error);
    res.status(500).json({ mensaje: 'Error al obtener glosario' });
  }
};

exports.renderGlosario = async (req, res) => {
  try {
    const glosario = mockData.mockGlosario;
    res.render('glosario', { glosario, total: glosario.length });
  } catch (error) {
    console.error('Error render glosario:', error);
    res.status(500).send('Error interno');
  }
};
