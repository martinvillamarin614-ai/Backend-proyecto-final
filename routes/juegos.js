
import express from "express";
import Juego from "../models/juego.js";

const router = express.Router();

// metodo get obtener
router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// metodo get por id
router.get("/:id", async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) return res.status(404).json({ message: "Juego no encontrado" });
    res.json(juego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// metedo post cargar 
router.post("/", async (req, res) => {
  const juego = new Juego(req.body);
  try {
    const nuevoJuego = await juego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// metodo put actualizar
router.put("/:id", async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!juegoActualizado) return res.status(404).json({ message: "Juego no encontrado" });
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// metedo delete borrar
router.delete("/:id", async (req, res) => {
  try {
    const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!juegoEliminado) return res.status(404).json({ message: "Juego no encontrado" });
    res.json({ message: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;