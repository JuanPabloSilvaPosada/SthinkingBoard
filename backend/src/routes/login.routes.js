import express from 'express';
import db from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Verificar que todos los campos estén presentes
  if (!email || !password) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  try {
    // Buscar el usuario en la base de datos
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    // Si no se encuentra el usuario, devolver un error
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    const user = result.rows[0];

    // Comparar la contraseña con la contraseña almacenada usando bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta." });
    }

    // Si la autenticación es exitosa, devolver una respuesta con el usuario
    return res.status(200).json({ message: "Inicio de sesión exitoso.", user: { id: user.id, email: user.email, username: user.username } });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error en el servidor." });
  }
});

export default router;