const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[bundle].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: {
      paths: ["src/**/*.php", "public/**/*"],
      options: {
        usePolling: false,
      },
    },
    client: {
      webSocketTransport: "ws",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
      scriptLoading: "defer",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
