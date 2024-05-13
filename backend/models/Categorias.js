const mongoose = require("mongoose"); 
 
const CategoriasSchema = new mongoose.Schema( 
  { 
    nombreCategoria: { type: String, required: true, unique: true }, 
    descripcionCategoria: { type: String, required: true }, 
    evento: { type: mongoose.Schema.Types.ObjectId, ref: 'Evento'
    }
  });

  module.exports = mongoose.model('Categorias', CategoriasSchema);