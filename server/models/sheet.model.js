import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  force: { type: String, enum: ["push", "pull", "static"] },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "expert"],
  },
  mechanic: { type: String, enum: ["compound", "isolation"] },
  equipment: { type: String },
  primaryMuscles: { type: [String] },
  secondaryMuscles: { type: [String] },
  instructions: { type: String },
  category: { type: String },
  images: { type: [String] },
  id: { type: String },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
