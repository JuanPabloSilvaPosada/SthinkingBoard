import express from 'express';
import loginRoutes from './login.routes.js';

const router = express.Router();

// Login Route with auth
router.use('/auth', loginRoutes);

export default router;
