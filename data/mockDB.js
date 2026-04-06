module.exports = {
  creditos: [
    {
      _id: '1',
      banco: 'Banco Estado',
      cae: '12.5%',
      tasa: '11.8%',
      plazo: '36',
      monto: '$500.000',
      contacto: 'www.bancoestado.cl/creditos',
      createdAt: new Date()
    },
    {
      _id: '2',
      banco: 'Banco de Chile',
      cae: '13.2%',
      tasa: '12.5%',
      plazo: '24',
      monto: '$1.200.000',
      contacto: 'contacto@bancochile.cl',
      createdAt: new Date()
    },
    {
      _id: '3',
      banco: 'Santander',
      cae: '11.8%',
      tasa: '11.2%',
      plazo: '48',
      monto: '$800.000',
      contacto: 'santander.cl/personas',
      createdAt: new Date()
    },
    {
      _id: '4',
      banco: 'BCI',
      cae: '14.1%',
      tasa: '13.4%',
      plazo: '12',
      monto: '$300.000',
      contacto: 'bci.cl/creditos',
      createdAt: new Date()
    },
    {
      _id: '5',
      banco: 'Scotiabank',
      cae: '12.9%',
      tasa: '12.1%',
      plazo: '36',
      monto: '$600.000',
      contacto: 'scotiabank.cl',
      createdAt: new Date()
    },
    {
      _id: '6',
      banco: 'Itaú',
      cae: '13.5%',
      tasa: '12.8%',
      plazo: '24',
      monto: '$900.000',
      contacto: 'itau.cl/consumo',
      createdAt: new Date()
    }
  ],
  faqs: [
    {
      _id: '1',
      pregunta: '¿Qué es el CAE?',
      respuesta: 'El CAE (Carga Anual Equivalente) es el costo total del crédito expresado en porcentaje anual, incluyendo intereses, comisiones y seguros.'
    },
    {
      _id: '2',
      pregunta: '¿Cómo se calcula la cuota mensual?',
      respuesta: 'Fórmula de amortización francés: Cuota = [Monto * Tasa * (1+Tasa)^Plazo] / [(1+Tasa)^Plazo - 1].'
    }
  ],
  glosario: [
    {
      _id: '1',
      termino: 'CAE',
      definicion: 'Carga Anual Equivalente: Costo total anual del crédito en %.'
    },
    {
      _id: '2',
      termino: 'Tasa',
      definicion: 'Interés nominal del crédito.'
    }
  ]
};
