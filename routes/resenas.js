import express from "express";
import Resena from "../models/resena.js";

const router = express.Router();

// metodo get obtener
router.get("/", async (req, res) => {
  try {
    const resenas = await Resena.find().populate("juegoId", "titulo");
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// metodo get por id
router.get("/juego/:juegoId", async (req, res) => {
  try {
    const resenas = await Resena.find({ juegoId: req.params.juegoId }).populate("juegoId", "titulo");
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// metedo post cargar 
router.post("/", async (req, res) => {
  try {
    const nuevaResena = new Resena(req.body);
    const guardada = await nuevaResena.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// metodo put actualizar
router.put("/:id", async (req, res) => {
  try {
    const resenaActualizada = await Resena.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(resenaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// metedo delete borrar
router.delete("/:id", async (req, res) => {
  try {
    await Resena.findByIdAndDelete(req.params.id);
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
