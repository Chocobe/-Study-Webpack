const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app.js",
  output: {
    filename: "app.build.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        // babel 설정
        test: /\.(j|t)s$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },
};