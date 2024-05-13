const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    evento: { type: mongoose.Schema.Types.ObjectId, ref: 'Evento', required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    fechaInscripcion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inscripcion', inscripcionSchema);
