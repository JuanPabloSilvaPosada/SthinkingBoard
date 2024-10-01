import { Router } from "express";
import db from '../db.js'

const router = Router();

router.get("/tasks", async(req, res) => {
  const result = await db.query('SELECT NOW()')
  res.json(result.rows[0].now)
});

router.post("/tasks", (req, res) => {
  res.send("Creando una nueva tarea");
});

router.delete("/tasks", (req, res) => {
  res.send("Eliminando una tarea");
});

router.put("/tasks", (req, res) => {
  res.send("Actualizando una tarea");
});

export default router;
