// Data from global mockData set by server.js
const getMockData = () => global.mockData;

exports.obtenerFaqJSON = async (req, res) => {
  try {
    const mockData = getMockData();
    const faqs = (mockData && mockData.mockFaqs) || [];
    res.json(faqs);
  } catch (error) {
    console.error('Error FAQ JSON:', error);
    res.status(500).json({ mensaje: 'Error al obtener FAQ' });
  }
};

exports.renderFaq = async (req, res) => {
  try {
    const mockData = getMockData();
    const faqs = (mockData && mockData.mockFaqs) || [];
    res.render('faq', { 
      faqs, 
      total: faqs.length,
      t: res.locals.t,
      currentLang: res.locals.currentLang
    });
  } catch (error) {
    console.error('Error render FAQ:', error);
    res.status(500).send('Error interno');
  }
};
