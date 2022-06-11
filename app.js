const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const postsRouter = require("./routs/postsRouter.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); //* для парсінга body в JSON

app.use("/api/posts", postsRouter);

app.use((req, res) => {});
app.use((err, req, res, next) => {
  res.status(500).json({ code: 500, message: err.message });
});

module.exports = app;
