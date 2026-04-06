// Data from global mockData set by server.js
const getMockData = () => global.mockData;

exports.obtenerGlosarioJSON = async (req, res) => {
  try {
    const mockData = getMockData();
    const glosario = (mockData && mockData.mockGlosario) || [];
    res.json(glosario);
  } catch (error) {
    console.error('Error glosario JSON:', error);
    res.status(500).json({ mensaje: 'Error al obtener glosario' });
  }
};

exports.renderGlosario = async (req, res) => {
  try {
    const mockData = getMockData();
    const glosario = (mockData && mockData.mockGlosario) || [];
    res.render('glosario', { 
      glosario, 
      total: glosario.length,
      t: res.locals.t,
      currentLang: res.locals.currentLang
    });
  } catch (error) {
    console.error('Error render glosario:', error);
    res.status(500).send('Error interno');
  }
};
