const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "/src/index.html"),
  filename: "index.html",
  inject: "body",
});

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production"),
});

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "./build"),
  },
  plugins: dev
    ? [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
    : [HTMLWebpackPluginConfig, DefinePluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  mode: dev ? "development" : "production",
  devServer: {
    publicPath: "/",
    port: 9000,
  },
};
