var path = require("path");

module.exports = {
  mode: "none",
  entry: "./app.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /css$/,
        exclude: /(node_modules|dist)/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}