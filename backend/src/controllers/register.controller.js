import db from "../db.js";
import bycrpt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;

  if (!username || !email || !password || !verifyPassword){
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  } 
  
  if (password !== verifyPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }
  
  try {
    // Hash password
    const hashedPassword = await bycrpt.hash(password, 10);

    // Add new user
    await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    if (error.code === "23505") {
      // Código de error para violación de unicidad
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está en uso" });
    }
  }
};
