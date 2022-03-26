const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app.js",
  output: {
    filename: "app.bundler.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      // stylesheet 관련 설정
      // => 실행 순서: sass-loader => css-loader => style-loader
      {
        test: /\.s[ac]ss$/,

        // 복수의 loader 를 순서에 맞춰 사용할 경우, Array 타입으로 작성
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
};