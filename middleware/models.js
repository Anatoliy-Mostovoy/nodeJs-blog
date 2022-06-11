const { getCollection } = require("../db/connection.js");

module.exports = (req, res, next) => {
  const collection = getCollection();
  req.db = { ...collection };
  next();
};
