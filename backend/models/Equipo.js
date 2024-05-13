const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    integrantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = mongoose.model('Equipo', equipoSchema);
