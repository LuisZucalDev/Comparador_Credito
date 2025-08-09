const mongoose = require('mongoose');

const glosarioSchema = new mongoose.Schema({
  termino: String,
  definicion: String
});

module.exports = mongoose.model('Glosario', glosarioSchema);
