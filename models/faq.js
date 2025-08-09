const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  pregunta: String,
  respuesta: String
});

module.exports = mongoose.model('Faq', faqSchema);
