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
        // babel 설정
        // => typescript 관련 preset 과 plugin 도 함께 설정
        test: /\.ts(x?)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
            ],
          },
        },
      },
    ],
  },
};