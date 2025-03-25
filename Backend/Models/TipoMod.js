const { Schema, model } = require('mongoose');

const TipoSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre requerido'],
    unique: [true, 'Este nombre ya existe']
  },
  estado: {
    type: Boolean,
    default: true
  },
  descripcion: {
    type: String
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
TipoSchema.pre('findOneAndUpdate', function (next) {
  this.set({ fechaActualizacion: Date.now() });
  next();
});

module.exports = model('Tipo', TipoSchema);
