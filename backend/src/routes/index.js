import express from 'express';
import loginRoutes from './login.routes.js';
import registerRoutes from './register.routes.js'

const router = express.Router();

// Login Route with auth
router.use('/auth', loginRoutes);
router.use('/auth', registerRoutes)

export default router;
