const { Schema, model } = require('mongoose');

const DirectorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Este nombre ya existe']
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

// Middleware para actualizar automáticamente la fecha de actualización
DirectorSchema.pre('findOneAndUpdate', function(next) {
    this.set({ fechaActualizacion: Date.now() });
    next();
});

module.exports = model('Director', DirectorSchema);
