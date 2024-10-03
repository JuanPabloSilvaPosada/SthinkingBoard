import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  if (!fullname || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden." });
  }

  return res.status(201).json({ message: "Usuario registrado exitosamente." });
});

export default router;