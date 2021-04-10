const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = Schema({
  NombreCurso: String,
  Descripcion: String,
  Estado: String,
  Planeado: String,
  Tema: String,
  Parcial: String,
  
  
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Cliente', CursoSchema);
