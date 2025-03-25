const { Schema, model } = require('mongoose');

const MediaSchema = Schema({
  serial: {
    type: String,
    required: [true, 'El serial es obligatorio'],
    unique: [true, 'Este serial ya existe']
  },
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio']
  },
  sinopsis: {
    type: String,
    required: [true, 'La sinopsis es obligatoria']
  },
  estreno: {
    type: Number,
    required: [true, 'El año de estreno es obligatorio']
  },
  URL: {
    type: String,
    required: [true, 'La URL es obligatoria'],
    unique: [true, 'Esta URL ya está registrada']
  },
  portada: {
    type: String,
    required: [true, 'La portada es obligatoria']
  },
  genero: {
    type: Schema.Types.ObjectId,
    ref: 'Genero',
    required: true
  },
  director: {
    type: Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },
  productora: {
    type: Schema.Types.ObjectId,
    ref: 'Productora',
    required: true
  },
  tipo: {
    type: Schema.Types.ObjectId,
    ref: 'Tipo',
    required: true
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

// Middleware para actualizar automáticamente la fechaActualizacion
MediaSchema.pre('findOneAndUpdate', function (next) {
  this.set({ fechaActualizacion: Date.now() });
  next();
});

module.exports = model('Media', MediaSchema);
