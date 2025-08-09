const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;

// Rutas
const creditoRoutes = require('./routes/creditoRoutes');
const faqRoutes = require('./routes/faqRoutes');
const glosarioRoutes = require('./routes/glosarioRoutes');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {

}).then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Uso de rutas
app.use('/creditos.json', creditoRoutes);
app.use('/faq.json', faqRoutes);
app.use('/glosario.json', glosarioRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(` Servidor corriendo en http://localhost:${port}`);
});

