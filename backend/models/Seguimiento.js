const mongoose = require('mongoose');

const seguimientoSchema = new mongoose.Schema({
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evento'
    },
    corredor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    ubicacion: {
        latitud: Number,
        longitud: Number
    },
    tiempo: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Seguimiento', seguimientoSchema);

