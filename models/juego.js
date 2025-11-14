import mongoose from 'mongoose';

const juegoSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
  plataforma: String,
  añoLanzamiento: Number,
  imagenPortada: String,
  descripcion: String,
  completado: Boolean,
  fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model('Juego', juegoSchema);