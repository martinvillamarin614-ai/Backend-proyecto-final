import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import juegosRoutes from "./routes/juegos.js";
import resenasRoutes from "./routes/resenas.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(" Conectado a MongoDB Atlas"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err));

app.use("/api/juegos", juegosRoutes);
app.use("/api/resenas", resenasRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Servidor corriendo en puerto ${PORT}`));
