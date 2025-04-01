import elasticClient from "./elasticClient.js";

async function searchExerciseByName(name) {
  try {
    const result = await elasticClient.search({
      index: "exercises",
      query: {
        match: { name },
      },
    });

    console.log("🔍 Search Results:", result.hits.hits);
    return result.hits.hits;
  } catch (error) {
    console.error("❌ Search Error:", error);
  }
}

// Example usage: Change the name to search for any exercise
searchExerciseByName("Kettlebell Press");

