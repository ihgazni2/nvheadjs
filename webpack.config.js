const path = require("path");

module.exports = {
  entry: "./nvhead.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "NVHEADJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

