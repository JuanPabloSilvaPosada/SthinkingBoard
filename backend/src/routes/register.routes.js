import express from "express";

// Import controller
import { registerUser } from "../controllers/index.js";

// Define Route
const router = express.Router();

// Send endpoint and function comming from the controller
router.post("/register", registerUser);

export default router;