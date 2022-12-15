const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// const webpack = require("webpack");
// const { log } = require("console");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const pages = ["index", "about", "contact", "portfolio", "journal", "work"];

// Js Files Management
const jsConfig = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
};

// HTML File Management
const htmlConfig = {
  rules: [
    {
      test: /\.(html)$/,
      loader: "html-loader",
      options: {
        sources: {
          list: [
            {
              tag: "img",
              attribute: "src",
              type: "src"
            },
            {
              tag: "a",
              attribute: "data-imagesmall",
              type: "src"
            },
            {
              tag: "a",
              attribute: "data-imagelarge",
              type: "src"
            }
          ]
        }
      }
    }
  ]
};

// Scss Files Management
const scssConfig = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: IS_DEVELOPMENT
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: IS_DEVELOPMENT
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: IS_DEVELOPMENT
      }
    }
  ]
};

// Fonts File Management
const fontsConfig = {
  test: /\.(woff(2)?|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  type: "asset/resource",
  generator: {
    filename: "assets/fonts/[name][ext][query]"
  }
};

// Images Files Management
const imgConfig = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  type: "asset/resource",
  generator: {
    filename: "assets/img/[contenthash][ext][query]"
  }
};

// Global Config
let config = {
  // target: "web",
  entry: [
    path.resolve(__dirname, "../src/scripts/app.js"),
    path.resolve(__dirname, "../src/styles/main.scss")
  ],
  output: {
    filename: "build.[contenthash].js",
    path: path.resolve(__dirname, "../docs")
  },
  module: {
    rules: [htmlConfig, jsConfig, scssConfig, fontsConfig, imgConfig]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/pages/index.html`,
      filename: `index.html`
    }),

    ...pages.map((page) => {
      return new HtmlWebpackPlugin({
        template: `./src/pages/${page}.html`,
        filename: `${page}/index.html`
      });
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),

    new CopyPlugin({
      patterns: [
        {
          globOptions: {
            ignore: ["**/README.txt"]
          },

          from: "./shared",
          to: ""
        }
      ]
    })
  ]
};

module.exports = config;
