import express from "express";
import routes from "./routes/routes.js";
import redirectRoutes from "./routes/redirectRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_BASE_URL,
  })
);

app.use(express.json());

app.use("/api", routes);
app.use("/", redirectRoutes);

export default app;