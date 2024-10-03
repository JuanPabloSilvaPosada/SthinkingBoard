import db from '../db.js'; // Importar la conexión a la base de datos
import bcrypt from 'bcrypt'; // Importar bcrypt

export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const result = await db.query(
      'SELECT * FROM users WHERE username = $1 OR email = $1',
      [identifier]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Comparar la contraseña proporcionada con la almacenada
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Contraseña correcta
        res.status(200).json({ message: 'Inicio de sesión exitoso', userId: user.id });
      } else {
        // Contraseña incorrecta
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    } else {
      // Usuario no encontrado
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};