const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app.ts",
  output: {
    filename: "app.build.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /(node_modules|dist)/,
      },
    ],
  },
};