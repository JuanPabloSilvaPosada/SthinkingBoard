import express from "express";

// Import controller
import { loginUser } from "../controllers/index.js";

// Define Route
const router = express.Router();

// Send endpoint and function comming from the controller
router.post("/login", loginUser);

export default router;