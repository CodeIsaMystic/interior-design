const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.config.common.js')

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const plugins = [
    // new MiniCssExtractPlugin({
    //     filename: "[name].[contenthash].css",
    // }),
    new CleanWebpackPlugin()
]



// Update Only what change in "production" mode
const prodConf = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    plugins: plugins,
}


module.exports = merge(
    commonConfiguration,
    prodConf
)