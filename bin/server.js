require("dotenv").config();
const app = require("../app.js");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 8081;

const start = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("blog");
  const Posts = db.collection("posts");
  const posts = await Posts.find({}).toArray();
  console.log(posts);

  app.listen(PORT, (err, req, res) => {
    if (err) {
      console.log(`Sorry, some error ${err}`);
    }
    console.log(`Server was start on PORT ${PORT}`);
  });
};

start();
