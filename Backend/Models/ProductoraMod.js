const { Schema, model } = require('mongoose');

const ProductoraSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    unique: [true, 'Este nombre ya existe']
  },
  slogan: {
    type: String,
    required: [true, 'El slogan es requerido']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es requerida']
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
ProductoraSchema.pre('findOneAndUpdate', function (next) {
  this.set({ fechaActualizacion: Date.now() });
  next();
});

module.exports = model('Productora', ProductoraSchema);
