const mongoose = require('mongoose');

const ciclistaSchema = new mongoose.Schema({
    curp: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Ciclista', ciclistaSchema);


