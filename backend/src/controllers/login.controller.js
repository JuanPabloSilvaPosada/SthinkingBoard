import db from "../db.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE username = $1 OR email = $1",
      [identifier]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Compare hashed password
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Correct password
        res
          .status(200)
          .json({ message: "Inicio de sesión exitoso", userId: user.id });
      } else {
        // Incorrect password
        res.status(401).json({ message: "Credenciales incorrectas" });
      }
    } else {
      // User not found
      res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    // Servidor down
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
