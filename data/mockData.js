const mockCreditos = [
  { banco: 'Banco Estado', cae: '12.5%', tasa: '11.8%', plazo: '36', monto: '$500.000', contacto: 'bancoestado.cl' },
  { banco: 'Banco de Chile', cae: '13.2%', tasa: '12.5%', plazo: '24', monto: '$1.200.000', contacto: 'bancochile.cl' },
  { banco: 'Santander', cae: '11.8%', tasa: '11.2%', plazo: '48', monto: '$800.000', contacto: 'santander.cl' },
  { banco: 'BCI', cae: '14.1%', tasa: '13.4%', plazo: '12', monto: '$300.000', contacto: 'bci.cl' },
  { banco: 'Scotiabank', cae: '12.9%', tasa: '12.1%', plazo: '36', monto: '$600.000', contacto: 'scotiabank.cl' },
  { banco: 'Itaú', cae: '13.5%', tasa: '12.8%', plazo: '24', monto: '$900.000', contacto: 'itau.cl' }
];

const mockFaqs = [
  { q_key: 'faq.q1', a_key: 'faq.a1' },
  { q_key: 'faq.q2', a_key: 'faq.a2' }
];

const mockGlosario = [
  { t_key: 'glosario.t1', d_key: 'glosario.d1' },
  { t_key: 'glosario.t2', d_key: 'glosario.d2' }
];

module.exports = {
  mockCreditos,
  mockFaqs,
  mockGlosario
};
