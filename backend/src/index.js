import express from "express";
import morgan from "morgan";

import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(taskRoutes);

app.listen(3000, () => {
    console.log("Server on port 3000");
});
