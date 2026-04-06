const mongoose = require('mongoose');

const glosarioSchema = new mongoose.Schema({
  termino: {
    type: String,
    required: true,
    trim: true
  },
  definicion: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Glosario', glosarioSchema);
