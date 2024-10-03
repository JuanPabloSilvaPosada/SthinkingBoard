import express from 'express';
import loginRoutes from './login.routes.js'; // Importar las rutas de login

const router = express.Router();

// Usar las rutas de login
router.use('/auth', loginRoutes); // Prefix para las rutas de autenticación

export default router;
