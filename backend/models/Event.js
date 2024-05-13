const mongoose = require("mongoose"); 
 
const EventSchema = new mongoose.Schema( 
  { 
    nombreEvento: { type: String, required: true, unique: true }, 
    lugarCarrera: { type: String, required: true }, 
    descripcionCarrera: { type: String, required: true }, 
    fechaInicioCarrera: { type: String, required: true }, 
    categoriaCarrera: { type: String, required: true }, 
    modalidadCarrera: { type: String, required: true }, 
    nombreRuta: { type: String, required: true }, 
    ruta: { type: String, required: true }, 
    descripcionRuta: { type: String, required: true }, 
    puntosReferencia: { type: String, required: true },
    isEvent: { type: Boolean, default: false},
    categorias: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'}
    }, 
); 
        
module.exports = mongoose.model('Event', EventSchema);