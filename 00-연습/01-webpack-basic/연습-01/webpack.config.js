const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app.js",
  output: {
    filename: "app.build.js",
    path: path.resolve(__dirname, "dist"),
  },
};