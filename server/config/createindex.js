import elasticClient from "./elasticClient.js";

async function recreateIndex() {
  try {
    // Step 1: Delete the old index (if it exists)
    await elasticClient.indices.delete(
      { index: "exercises" },
      { ignore: [404] }
    ); // Ignore if index doesn't exist

    // Step 2: Create the new index with the updated mapping
    await elasticClient.indices.create(
      {
        index: "exercises",
        body: {
          mappings: {
            properties: {
              name: { type: "text" },
              force: { type: "keyword" },
              level: { type: "keyword" },
              mechanic: { type: "keyword" },
              equipment: { type: "keyword" },
              primaryMuscles: { type: "keyword" },
              secondaryMuscles: { type: "keyword" },
              instructions: { type: "text" },
              category: { type: "keyword" },
              images: {
                type: "keyword", // Updated to 'keyword' for an array of strings
              },
            },
          },
        },
      },
      { ignore: [400] } // Ignore error if the index already exists
    );
    console.log("Index 'exercises' recreated successfully!");
  } catch (error) {
    console.error("Error recreating index:", error);
  }
}

recreateIndex().catch(console.error);
