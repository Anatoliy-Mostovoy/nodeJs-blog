require("dotenv").config();
const { MongoClient } = require("mongodb");
const collections = {};

const getCollection = () => {
  console.log(collections);
  return collections;
};

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("blog");
  collections.Posts = db.collection("posts");

  console.log("Database connected successful!");
};

module.exports = { connectMongo, getCollection };
