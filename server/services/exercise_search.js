// services/exerciseService.js
import elasticClient from "../config/elasticClient.js";

export async function searchExerciseusingName(name) {
  try {
    const result = await elasticClient.search({
      index: "exercises",
      body: {
        query: {
          match: { name },
        },
      },
    }); // searching excercises by name

    console.log("Search Results:", result.hits.hits);
    return result.hits.hits;
  } catch (error) {
    console.error("Search Error:", error);
  }
}

export default { searchExerciseusingName };
