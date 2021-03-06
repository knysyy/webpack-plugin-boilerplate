const WebpackPluginBoilerPlatePlugin = require("../dist");
const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new WebpackPluginBoilerPlatePlugin()],
};
