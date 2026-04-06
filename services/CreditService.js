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
}

module.exports = CreditService;

