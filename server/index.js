import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./libs/server.js";
import exercise_router from "./routes/exercise.route.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/exercise", exercise_router);


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1); // Exit process if DB connection fails
  });
