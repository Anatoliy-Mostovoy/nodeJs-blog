const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const postsRouter = require("./routs/postsRouter.js");
const { errorHandler } = require("./helpers/apiHelpers");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); //* для парсінга body в JSON

app.use("/api/posts", postsRouter);
app.use(errorHandler);

module.exports = app;
