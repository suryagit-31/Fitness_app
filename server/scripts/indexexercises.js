import { MongoClient } from "mongodb";
import elasticClient from "../config/elasticClient.js";

async function indexExercises() {
  const client = new MongoClient(
    "mongodb+srv://surya:mongodb31@fitness.e8idd.mongodb.net/"
  ); // MongoDB URL
  await client.connect();
  const db = client.db("test"); // Replace with your database name
  const collection = db.collection("exercises");

  const exercises = await collection.find().toArray();

  const body = [];

  exercises.forEach((doc) => {
    body.push(
      { index: { _index: "exercises", _id: doc._id.toString() } },
      {
        name: doc.name,
        force: doc.force,
        level: doc.level,
        mechanic: doc.mechanic,
        equipment: doc.equipment,
        primaryMuscles: doc.primaryMuscles,
        secondaryMuscles: doc.secondaryMuscles,
        instructions: doc.instructions,
        category: doc.category,
        images: Array.isArray(doc.images)
          ? doc.images
          : doc.images
          ? [doc.images]
          : [],
      }
    );
  });

  // Bulk index the data
  try {
    const bulkResponse = await elasticClient.bulk({ body });
    console.log("Bulk Response:", bulkResponse); // Log the entire response
    if (bulkResponse.errors) {
      // Log detailed errors for each document
      bulkResponse.items.forEach((item, index) => {
        if (item.index && item.index.error) {
          console.error(`Error at index ${index}:`, item.index.error);
        }
      });
    } else {
      console.log("Successfully indexed all exercises.");
    }
  } catch (error) {
    console.error("Error during bulk indexing:", error);
  }

  await client.close();
}

indexExercises().catch(console.error);
