const { Schema, model } = require('mongoose');

const GeneroSchema = Schema({
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
    },
    descripcion: {
        type: String
    }
});

// Middleware para actualizar la fechaActualizacion antes de guardar cambios
GeneroSchema.pre('findOneAndUpdate', function(next) {
    this.set({ fechaActualizacion: Date.now() });
    next();
});

module.exports = model('Genero', GeneroSchema);
