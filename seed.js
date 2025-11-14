import mongoose from "mongoose";
import dotenv from "dotenv";
import Juego from "./models/juego.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const juegos = [
  {
    titulo: "The Legend of Zelda: Tears of the Kingdom",
    genero: "Aventura",
    plataforma: "Nintendo Switch",
    horasJugadas: 120,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/zelda-totk.jpg",
    añoLanzamiento: 2023,
    descripcion:
      "Una nueva aventura en el mundo de Hyrule, con libertad total para explorar y construir."
  },
  {
    titulo: "God of War: Ragnarök",
    genero: "Acción",
    plataforma: "PlayStation 5",
    horasJugadas: 70,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/gow-ragnarok.jpg",
    añoLanzamiento: 2022,
    descripcion:
      "Kratos y Atreus enfrentan a los dioses nórdicos en una épica historia sobre el destino."
  },
  {
    titulo: "Cyberpunk 2077",
    genero: "RPG",
    plataforma: "PC",
    horasJugadas: 90,
    completado: false,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/cyberpunk-2077.jpg",
    añoLanzamiento: 2020,
    descripcion:
      "Explora Night City, una megalópolis obsesionada con el poder, el glamour y las modificaciones corporales."
  },
  {
    titulo: "Minecraft",
    genero: "Sandbox",
    plataforma: "PC",
    horasJugadas: 300,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/minecraft.jpg",
    añoLanzamiento: 2011,
    descripcion:
      "Construye, sobrevive y explora un mundo infinito de bloques y aventuras."
  },
  {
    titulo: "Elden Ring",
    genero: "Acción RPG",
    plataforma: "PC",
    horasJugadas: 150,
    completado: false,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/elden-ring.jpg",
    añoLanzamiento: 2022,
    descripcion:
      "Explora las Tierras Intermedias en un vasto mundo de fantasía creado por FromSoftware."
  },
  {
    titulo: "Hollow Knight",
    genero: "Metroidvania",
    plataforma: "PC",
    horasJugadas: 40,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/hollow-knight.jpg",
    añoLanzamiento: 2017,
    descripcion:
      "Un hermoso y desafiante juego de acción y exploración en un misterioso mundo subterráneo."
  },
  {
    titulo: "Red Dead Redemption 2",
    genero: "Aventura",
    plataforma: "PC",
    horasJugadas: 110,
    completado: false,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/rdr2.jpg",
    añoLanzamiento: 2018,
    descripcion:
      "Sigue a Arthur Morgan en una historia épica del fin del Salvaje Oeste."
  },
  {
    titulo: "Resident Evil 4 Remake",
    genero: "Terror / Acción",
    plataforma: "PlayStation 5",
    horasJugadas: 45,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/re4-remake.jpg",
    añoLanzamiento: 2023,
    descripcion:
      "Una reimaginación moderna del clásico de survival horror protagonizado por Leon S. Kennedy."
  },
  {
    titulo: "The Witcher 3: Wild Hunt",
    genero: "RPG",
    plataforma: "PC",
    horasJugadas: 200,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/witcher3.jpg",
    añoLanzamiento: 2015,
    descripcion:
      "Geralt de Rivia busca a su hija adoptiva mientras el mundo se ve amenazado por la Cacería Salvaje."
  },
  {
    titulo: "Spider-Man 2",
    genero: "Acción",
    plataforma: "PlayStation 5",
    horasJugadas: 35,
    completado: true,
    imagenPortada:
      "https://raw.githubusercontent.com/gamer-arts/game-covers/main/spiderman2.jpg",
    añoLanzamiento: 2023,
    descripcion:
      "Peter Parker y Miles Morales deben enfrentar nuevos desafíos en esta secuela llena de acción."
  }
];



const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB Atlas");
    await Juego.deleteMany();
    console.log("Datos anteriores eliminados");
    await Juego.insertMany(juegos);
    console.log("Juegos insertados correctamente");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error al ejecutar seed:", err);
  }
};

seedDB();
//para agregar juegos
