const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  pregunta: {
    type: String,
    required: true,
    trim: true
  },
  respuesta: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Faq', faqSchema);
