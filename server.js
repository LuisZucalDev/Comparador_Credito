const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const i18n = require('./middleware/i18n');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// View engine EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Body parser for query/form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(i18n);

// Static files
app.use(express.static('public'));

// Conexión a MongoDB
// Mock data sin MongoDB (producción: activa mongoose)
const mockData = require('./data/mockData');
global.mockData = mockData;
console.log('🚀 Modo Mock DB (sin MongoDB)');
console.log('✅ Mock DB cargada:', mockData.mockCreditos.length, 'créditos');

// Rutas
const creditoRoutes = require('./routes/creditoRoutes');
const faqRoutes = require('./routes/faqRoutes');
const glosarioRoutes = require('./routes/glosarioRoutes');

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

