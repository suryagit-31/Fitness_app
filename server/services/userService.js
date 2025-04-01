import Exercise from "../models/sheet.model";

async function getAllExercises() {
  const exercises = await Exercise.find();
  return exercises;
}



