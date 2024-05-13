const mongoose = require('mongoose');

const resultadoSchema = new mongoose.Schema({
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evento'
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    participantes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }],
    clasificacion: [{
        puesto: Number,
        corredor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario'
        },
        tiempo: String
    }]
});

module.exports = mongoose.model('Resultado', resultadoSchema);
