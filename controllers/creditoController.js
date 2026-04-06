const CreditService = require('../services/CreditService');
const bankConfig = require('../config/banks');

const getMockData = () => global.mockData;

exports.obtenerCreditosJSON = async (req, res) => {
  try {
    const mockData = getMockData();
    const { mockCreditos } = mockData || {};
    if (!mockCreditos) {
      return res.status(500).json({ error: 'Datos no disponibles' });
    }
    const { plazo, monto } = req.query;
    const creditosFiltrados = CreditService.filterCredits(mockCreditos, plazo, monto);
    
    res.json({
      creditos: creditosFiltrados,
      filtros: { plazo, monto },
      total: creditosFiltrados.length
    });
  } catch (error) {
    console.error('Error JSON créditos:', error);
    res.status(500).json({ mensaje: 'Error al obtener créditos' });
  }
};

exports.renderComparador = async (req, res) => {
  try {
    const mockData = getMockData();
    const { mockCreditos } = mockData || {};
    if (!mockCreditos) {
      return res.status(500).send('Datos no disponibles');
    }
    
    const { plazo, monto } = req.query;
    const creditosFiltrados = CreditService.filterCredits(mockCreditos, plazo, monto);
    const stats = CreditService.calculateStats(creditosFiltrados);
    
    // Inject bank configuration into each credit object for easier view rendering
    const creditosConConfig = creditosFiltrados.map(c => ({
      ...c,
      config: bankConfig[c.banco] || { color: 'slate-500', icon: '🏦', gradient: 'from-slate-500/10 to-slate-600/10' }
    }));

    res.render('comparador', {
      creditos: creditosConConfig,
      plazo: plazo || '',
      monto: monto || '',
      currentFilters: { plazo, monto },
      total: creditosFiltrados.length,
      stats: stats,
      bankConfig: bankConfig,
      t: res.locals.t,
      currentLang: res.locals.currentLang
    });
  } catch (error) {
    console.error('Error render comparador:', error);
    res.status(500).send('Error interno del servidor');
  }
};
