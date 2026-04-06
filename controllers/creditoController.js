const CreditService = require('../services/CreditService');
// Data from global mockData set by server.js
// Use global mockData from server.js
const getMockData = () => global.mockData;

exports.obtenerCreditosJSON = async (req, res) => {
  try {
    const mockData = getMockData();
    const { mockCreditos } = mockData || {};
    if (!mockCreditos) {
      return res.status(500).json({ error: 'Datos no disponibles' });
    }
    const creditos = mockCreditos;
    const { plazo, monto } = req.query;
    const creditosFiltrados = CreditService.filterCredits(creditos, plazo, monto);
    
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

// Función helper para calcular mejor CAE y stats
function calcularStats(creditosFiltrados) {
  if (creditosFiltrados.length === 0) return null;
  
  const mejorCAE = creditosFiltrados.reduce((min, c) => 
    parseFloat(c.cae.replace('%', '')) < parseFloat(min.cae.replace('%', '')) ? c : min
  );
  
  const avgCAE = creditosFiltrados.reduce((sum, c) => sum + parseFloat(c.cae.replace('%', '')), 0) / creditosFiltrados.length;
  
  return {
    mejorCAE: mejorCAE.cae,
    mejorBanco: mejorCAE.banco,
    avgCAE: avgCAE.toFixed(1) + '%',
    total: creditosFiltrados.length
  };
}

exports.renderComparador = async (req, res) => {
  try {
    const mockData = getMockData();
    const { mockCreditos } = mockData || {};
    if (!mockCreditos) {
      return res.status(500).send('Datos no disponibles');
    }
    const creditos = mockCreditos;
    const { plazo, monto } = req.query;
    const creditosFiltrados = CreditService.filterCredits(creditos, plazo, monto);
    const stats = calcularStats(creditosFiltrados);
    
    res.render('comparador', {
      creditos: creditosFiltrados,
      plazo: plazo || '',
      monto: monto || '',
      total: creditosFiltrados.length,
      stats: stats
    });
  } catch (error) {
    console.error('Error render comparador:', error);
    res.status(500).send('Error interno del servidor');
  }
};
