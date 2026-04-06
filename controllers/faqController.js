const mockData = global.mockData;

exports.obtenerFaqJSON = async (req, res) => {
  try {
    const faqs = mockData.mockFaqs;
    res.json(faqs);
  } catch (error) {
    console.error('Error FAQ JSON:', error);
    res.status(500).json({ mensaje: 'Error al obtener FAQ' });
  }
};

exports.renderFaq = async (req, res) => {
  try {
    const faqs = mockData.mockFaqs;
    res.render('faq', { faqs, total: faqs.length });
  } catch (error) {
    console.error('Error render FAQ:', error);
    res.status(500).send('Error interno');
  }
};
