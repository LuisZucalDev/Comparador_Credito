class CreditService {
  static filterCredits(creditos, plazo = null, montoMax = null) {
    return creditos.filter(credito => {
      const plazoNum = parseInt(credito.plazo);
      
      // Filtro plazo
      if (plazo && plazoNum !== parseInt(plazo)) return false;
      
      // Filtro monto (limpiar formato $.,)
      const montoClean = parseFloat(
        credito.monto.replace(/[\$\.]/g, '').replace(',', '.')
      );
      
      if (montoMax && !isNaN(parseFloat(montoMax)) && montoClean > parseFloat(montoMax)) {
        return false;
      }
      
      return true;
    });
  }

  static calculateStats(creditos) {
    if (!creditos || creditos.length === 0) return null;

    const caes = creditos.map(c => parseFloat(c.cae.replace('%', '')));
    const minCae = Math.min(...caes);
    const avgCae = caes.reduce((a, b) => a + b, 0) / caes.length;
    
    const mejorOferta = creditos.find(c => parseFloat(c.cae.replace('%', '')) === minCae);

    return {
      minCae: minCae.toFixed(2) + '%',
      avgCae: avgCae.toFixed(2) + '%',
      mejorBanco: mejorOferta ? mejorOferta.banco : null,
      total: creditos.length
    };
  }
}

module.exports = CreditService;

