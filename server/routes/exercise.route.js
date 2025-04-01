import express from "express";
import {
  filter_Exercise,
  Getall_Exercise,
  refined_Exercise,
} from "../controllers/exercise.controller.js";

const router = express.Router();

router.get("/choice", filter_Exercise);

router.get("/all", Getall_Exercise);

router.get("/refined", refined_Exercise);

export default router;
