const mongoose = require('mongoose');

const creditoSchema = new mongoose.Schema({
  banco: {
    type: String,
    required: true,
    trim: true
  },
  cae: {
    type: String,
    required: true,
    match: /^\d+(\.\d+)?%$/
  },
  tasa: {
    type: String,
    required: true,
    match: /^\d+(\.\d+)?%$/
  },
  plazo: {
    type: String,
    required: true,
    match: /^\d+$/
  },
  monto: {
    type: String,
    required: true
  },
  contacto: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Credito', creditoSchema);