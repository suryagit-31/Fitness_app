import express from "express";
import {
  filter_Exercise,
  Getall_Exercise,
  refined_Exercise,
  searchExerciseByName,
} from "../controllers/exercise.controller.js";

const router = express.Router();

router.post("/workoutplan", filter_Exercise);

router.get("/all", Getall_Exercise);

router.get("/refined", refined_Exercise);

router.get("/search", searchExerciseByName);

export default router;
