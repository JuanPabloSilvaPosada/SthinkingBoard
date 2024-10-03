import express from "express";
import db from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Verificar que todos los campos estén presentes
  if (!username || !email || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ message: "Todos los campos son requeridos." });
  }

  // Verificar que las contraseñas coincidan
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden." });
  }

  try {
    // Encriptar la contraseña con bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el usuario en la base de datos con la contraseña encriptada
    const result = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );

    // Devolver una respuesta exitosa
    return res
      .status(201)
      .json({
        message: "Usuario registrado exitosamente.",
        user: result.rows[0],
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar el usuario." });
  }
});

export default router;
