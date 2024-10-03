import express from "express";
import cors from "cors"
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

import loginRoute from './routes/login.routes'
import registerRoute from './routes/register.routes'

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
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});