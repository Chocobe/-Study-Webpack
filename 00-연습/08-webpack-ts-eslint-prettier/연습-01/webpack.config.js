const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./app.ts",
  output: {
    filename: "app.bundler.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader",
        ],
        exclude: /(node_modules|dist)/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app.html",
    }),
  ],
  
  devServer: {
    port: 8085,
  },
};