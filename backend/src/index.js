import express from 'express';
import cors from 'cors';
import db from './db.js'; // Importar la base de datos
import routes from './routes/index.js'; // Importar todas las rutas agrupadas

const app = express();
const PORT = 5000;

// Probar la conexión a la base de datos
db.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(routes); // Usar todas las rutas importadas

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
