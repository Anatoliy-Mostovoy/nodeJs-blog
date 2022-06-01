const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const postsRouter = require("./routs/postsRouter.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/posts", postsRouter);

app.use((req, res) => {});
app.use((err, req, res, next) => {});

module.exports = app;
