const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// View engine EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Body parser for query/form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static('public'));

// Rutas
const creditoRoutes = require('./routes/creditoRoutes');
const faqRoutes = require('./routes/faqRoutes');
const glosarioRoutes = require('./routes/glosarioRoutes');

// Conexión a MongoDB
// Mock data sin MongoDB (producción: activa mongoose)
let mockCreditos = [];
let mockFaqs = [];
let mockGlosario = [];
console.log('🚀 Modo Mock DB (sin MongoDB)');

async function loadMockData() {
  mockCreditos = [
    { banco: 'Banco Estado', cae: '12.5%', tasa: '11.8%', plazo: '36', monto: '$500.000', contacto: 'bancoestado.cl' },
    { banco: 'Banco de Chile', cae: '13.2%', tasa: '12.5%', plazo: '24', monto: '$1.200.000', contacto: 'bancochile.cl' },
    { banco: 'Santander', cae: '11.8%', tasa: '11.2%', plazo: '48', monto: '$800.000', contacto: 'santander.cl' },
    { banco: 'BCI', cae: '14.1%', tasa: '13.4%', plazo: '12', monto: '$300.000', contacto: 'bci.cl' },
    { banco: 'Scotiabank', cae: '12.9%', tasa: '12.1%', plazo: '36', monto: '$600.000', contacto: 'scotiabank.cl' },
    { banco: 'Itaú', cae: '13.5%', tasa: '12.8%', plazo: '24', monto: '$900.000', contacto: 'itau.cl' }
  ];
  
  mockFaqs = [
    { pregunta: '¿Qué es CAE?', respuesta: 'Costo total crédito en % anual.' },
    { pregunta: '¿Cuota mensual?', respuesta: 'Fórmula amortización francés.' }
  ];
  
  mockGlosario = [
    { termino: 'CAE', definicion: 'Carga Anual Equivalente.' },
    { termino: 'Tasa', definicion: 'Interés nominal.' }
  ];
  console.log('✅ Mock DB cargada:', mockCreditos.length, 'créditos');
}

// Reemplazar find() en controllers con mocks
// Mock no necesita modelo real
// const originalFind = require('./models/credito').prototype.find;
loadMockData();
global.mockData = { mockCreditos, mockFaqs, mockGlosario, loadMockData };
console.log('global.mockData set:', !!global.mockData, 'creditos:', mockCreditos.length);

// Routes JSON legacy
app.use('/api/creditos.json', creditoRoutes);
app.use('/api/faq.json', faqRoutes);
app.use('/api/glosario.json', glosarioRoutes);

// Route raíz - redirige a comparador
app.get('/', (req, res) => {
  res.redirect('/comparador');
});



// Routes MVC
app.use('/comparador', creditoRoutes);
app.use('/faq', faqRoutes);
app.use('/glosario', glosarioRoutes);

// 404 handler
app.use((req, res) => res.status(404).send('Página no encontrada'));

// Iniciar servidor
app.listen(port, () => {
  console.log(`✅ Servidor MVC corriendo en http://localhost:${port}`);
  console.log('📱 Rutas: /comparador, /faq, /glosario');
});

