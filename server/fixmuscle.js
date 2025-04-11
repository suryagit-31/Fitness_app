import mongoose from "mongoose";
import dotenv from "dotenv";
import Exercise from "./models/sheet.model.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI); // or put your full string here

const exercises = await Exercise.find();

for (const ex of exercises) {
  if (
    Array.isArray(ex.primaryMuscles) &&
    ex.primaryMuscles.length === 1 &&
    typeof ex.primaryMuscles[0] === "string" &&
    ex.primaryMuscles[0].startsWith("['")
  ) {
    try {
      // Convert "['abdominals']" → ['abdominals']
      const parsed = JSON.parse(ex.primaryMuscles[0].replace(/'/g, '"'));
      ex.primaryMuscles = parsed;
      await ex.save();
      console.log(`✅ Fixed: ${ex.name}`);
    } catch (err) {
      console.error(`❌ Error on ${ex.name}:`, err.message);
    }
  }
}

console.log("🎉 All documents cleaned.");
process.exit(0);
