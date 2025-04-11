import Exercise from "../models/sheet.model.js";
import { searchExerciseusingName } from "../services/exercise_search.js";

export const filter_Exercise = async (req, res) => {
  try {
    const { level, primaryMuscles, category } = req.body;
    console.log(req.body);
    let filter = {};

    if (level) filter.level = level;
    if (primaryMuscles) {
      filter.primaryMuscles = { $in: primaryMuscles };
    }
    if (category) filter.category = category;

    const filteredExercises = await Exercise.find(filter);
    console.log(filteredExercises);
    return res.status(200).json(filteredExercises);
  } catch (error) {
    console.error("Error fetching filtered exercises:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const Getall_Exercise = async (req, res) => {
  try {
    const all_exercises = await Exercise.find({});
    return res.status(200).json(all_exercises);
  } catch (error) {
    console.error("Error fetching all exercises:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const refined_Exercise = async (req, res) => {
  try {
    const { force, mechanic, equipment, filteredExercises } = req.body;
    let filter = {};

    if (force) filter.force = force;
    if (mechanic) filter.mechanic = mechanic;
    if (equipment) filter.equipment = equipment;

    let refined_Exercise = await filteredExercises.filter(
      (exercise) =>
        exercise.force === filter.force &&
        exercise.mechanic === filter.mechanic &&
        exercise.equipment === filter.equipment
    );
    return res.status(200).json(refined_Exercise);
  } catch (error) {
    console.error("Error fetching exercise:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const searchExerciseByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Search query is required" });
    }

    const result = await searchExerciseusingName(name);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error searching exercise:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
