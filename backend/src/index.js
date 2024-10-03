import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

import loginRoute from './routes/login.routes.js'; 
import registerRoute from './routes/register.routes.js'; 

// Rutas
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// Ruta principal
app.get('/', (req, res) => {
  res.send("Bienvenido al Backend de la aplicación.");
});

// Manejar errores de rutas inexistentes
app.use((req, res) => {
  res.status(404).send("La página que buscas no existe.");
});

// Iniciar el servidor
app.listen(port, () => { // Cambiado de PORT a port
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
