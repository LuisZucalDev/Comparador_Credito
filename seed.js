require('dotenv').config();
const mongoose = require('mongoose');

// Importar modelos
const Credito = require('./models/credito');
const Faq = require('./models/faq');
const Glosario = require('./models/glosario');

// Datos de ejemplo para Créditos (simulando bancos chilenos)
const creditosSeed = [
  {
    banco: 'Banco Estado',
    cae: '12.5%',
    tasa: '11.8%',
    plazo: '36',
    monto: '$500.000',
    contacto: 'www.bancoestado.cl/creditos'
  },
  {
    banco: 'Banco de Chile',
    cae: '13.2%',
    tasa: '12.5%',
    plazo: '24',
    monto: '$1.200.000',
    contacto: 'contacto@bancochile.cl'
  },
  {
    banco: 'Santander',
    cae: '11.8%',
    tasa: '11.2%',
    plazo: '48',
    monto: '$800.000',
    contacto: 'santander.cl/personas'
  },
  {
    banco: 'BCI',
    cae: '14.1%',
    tasa: '13.4%',
    plazo: '12',
    monto: '$300.000',
    contacto: 'bci.cl/creditos'
  },
  {
    banco: 'Scotiabank',
    cae: '12.9%',
    tasa: '12.1%',
    plazo: '36',
    monto: '$600.000',
    contacto: 'scotiabank.cl'
  },
  {
    banco: 'Itaú',
    cae: '13.5%',
    tasa: '12.8%',
    plazo: '24',
    monto: '$900.000',
    contacto: 'itau.cl/consumo'
  }
];

// Datos para FAQ
const faqSeed = [
  {
    pregunta: '¿Qué es el CAE?',
    respuesta: 'El CAE (Carga Anual Equivalente) es el costo total del crédito expresado en porcentaje anual, incluyendo intereses, comisiones y seguros. Es la métrica más importante para comparar créditos.'
  },
  {
    pregunta: '¿Cómo se calcula la cuota mensual?',
    respuesta: 'La cuota se calcula con la fórmula de amortización francés: Cuota = [Monto * Tasa * (1+Tasa)^Plazo] / [(1+Tasa)^Plazo - 1]. Usa simuladores en línea para precisión.'
  },
  {
    pregunta: '¿Necesito garantía para solicitar crédito?',
    respuesta: 'Depende del banco y monto. Créditos de consumo hasta $500.000 suelen no requerir garantía. Montos mayores sí (hipoteca, codeudor).'
  },
  {
    pregunta: '¿Cuál es el plazo máximo?',
    respuesta: 'Para consumo: hasta 48 meses. Hipotecarios: hasta 30 años. Verifica requisitos por banco.'
  }
];

// Datos para Glosario
const glosarioSeed = [
  {
    termino: 'CAE',
    definicion: 'Carga Anual Equivalente: Costo total anual del crédito en %. Incluye intereses + comisiones + seguros.'
  },
  {
    termino: 'Tasa de Interés',
    definicion: 'Porcentaje que cobra el banco por prestar dinero. No incluye comisiones.'
  },
  {
    termino: 'Plazo',
    definicion: 'Duración del crédito en meses. Cuanto más largo, menor cuota pero pagas más intereses.'
  },
  {
    termino: 'Monto Máximo',
    definicion: 'Cantidad máxima que puedes solicitar según tu ingreso y perfil crediticio.'
  },
  {
    termino: 'Amortización',
    definicion: 'Proceso de pago gradual del capital + intereses. Sistema francés es el más común.'
  },
  {
    termino: 'CMF',
    definicion: 'Comisión para el Mercado Financiero: Entidad reguladora de bancos en Chile.'
  }
];

const seedDB = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/comparador_credito');
    console.log('✅ Conectado a MongoDB');

    // Limpiar datos existentes
    await Credito.deleteMany({});
    await Faq.deleteMany({});
    await Glosario.deleteMany({});
    console.log('🗑️ Datos existentes eliminados');

    // Insertar datos nuevos
    await Credito.insertMany(creditosSeed);
    await Faq.insertMany(faqSeed);
    await Glosario.insertMany(glosarioSeed);

    console.log('🎉 Seed completado!');
    console.log(`📊 Créditos: ${creditosSeed.length}`);
    console.log(`❓ FAQ: ${faqSeed.length}`);
    console.log(`📚 Glosario: ${glosarioSeed.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en seed:', error);
    process.exit(1);
  }
};

seedDB();

