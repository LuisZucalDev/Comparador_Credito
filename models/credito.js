const mongoose = require('mongoose');

const creditoSchema = new mongoose.Schema({
  banco: String,
  cae: String,
  tasa: String,
  plazo: String,
  monto: String,
  contacto: String
});

module.exports = mongoose.model('Credito', creditoSchema);