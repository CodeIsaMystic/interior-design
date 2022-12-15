const { merge } = require("webpack-merge");

const commonConfiguration = require("./webpack.config.common.js");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// const path = require("path");

// Configure Dev Server
const devServer = {
  // contentBase: path.join(__dirname, '../dist'),
  contentBase: "dist",
  writeToDisk: true
};

// Update Only what change in "development" mode
const devConf = {
  mode: "development",
  devtool: "inline-source-map",
  devServer,

  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] }
    })
  ]
};

module.exports = merge(commonConfiguration, devConf);
