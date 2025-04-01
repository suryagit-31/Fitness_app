import { google } from "googleapis";
import Excercise from "./models/sheet.model.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  keyFile: "./config/fitness-321-7982c51f4cea.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

async function readSheet() {
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "1E9rlh6juDNLeD25SGy5AhBLXKoiJOnlfF-Jopuyw-RQ";
  const range = "Sheet1"; // The range to read

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values; // Extract data from response

    if (!rows || rows.length === 0) {
      console.log("No data found.");
      return;
    }

    console.log("📌 Data from Google Sheets:");
    //console.table(rows); // Print data in table format
    const headers = rows[0]; // First row is headers
    const exercises = rows
      .slice(1)
      .map((row) =>
        Object.fromEntries(
          headers.map((header, index) => [header, row[index] || ""])
        )
      );

    console.log(`📌 ${exercises.length} records fetched.`);
    return exercises;
  } catch (error) {
    console.error("❌ Error reading data:", error);
  }
}

async function savetoMongo() {
  try {
    console.log("connecting to mongo db server");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db server");
    const exercises = await readSheet();
    if (exercises.length === 0) return;

    // ✅ Insert into MongoDB
    await Excercise.insertMany(exercises, { ordered: false });
    console.log("✅ Data successfully saved to MongoDB!");

    mongoose.connection.close();
  } catch (error) {
    console.log("we got an error", error);
  }
}

savetoMongo();
