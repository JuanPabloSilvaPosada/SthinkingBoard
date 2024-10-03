import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@example.com" && password === "123456") {
    return res.status(200).json({ message: "Inicio de sesión exitoso." });
  } else {
    return res.status(401).json({ message: "Credenciales inválidas." });
  }
});

module.exports = router;
