require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const connectMongo = async () => {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectMongo };

//TODO on vanilla MongoDB
// require("dotenv").config();
// const { MongoClient } = require("mongodb");
// const collections = {};

// const getCollection = () => {
//   console.log(collections);
//   return collections;
// };

// const connectMongo = async () => {
//   const client = await MongoClient.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = client.db("blog");
//   collections.Posts = db.collection("posts");

//   console.log("Database connected successful!");
// };

// module.exports = { connectMongo, getCollection };
