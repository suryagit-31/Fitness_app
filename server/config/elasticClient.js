import { Client } from "@elastic/elasticsearch";

const elasticClient = new Client({
  node: "http://localhost:9200", // No auth needed
});

const checkConnection = async () => {
  try {
    const health = await elasticClient.cluster.health();
    console.log("✅ Elasticsearch Cluster Health:", health);
  } catch (error) {
    console.error("❌ Elasticsearch Connection Error:", error);
  }
};

checkConnection();

export default elasticClient;
