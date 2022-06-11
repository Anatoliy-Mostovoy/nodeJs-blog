require("dotenv").config();
const app = require("../app.js");
const { connectMongo } = require("../db/connection.js");

const PORT = process.env.PORT || 8081;

const start = async () => {
  await connectMongo();

  app.listen(PORT, (err, req, res) => {
    if (err) {
      console.log(`Sorry, some error ${err}`);
    }
    console.log(`Server was start on PORT ${PORT}`);
  });
};

start();
