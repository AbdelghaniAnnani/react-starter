const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const APP_DIR = path.resolve(__dirname, "src/");
const HTML_DIR = path.resolve(__dirname, "public/");
const BUILD_DIR_CLIENT = path.resolve(__dirname, "dist/");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlTemplate = new HtmlWebpackPlugin({
    template: HTML_DIR + "/index.html",
    filename: BUILD_DIR_CLIENT + "/main_index_template.html",
});

module.exports = {
    entry: {
        index: APP_DIR + "/index.js",
    },
    output: {
        path: BUILD_DIR_CLIENT,
        filename: "main_index.js",
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        publicPath: "/",
        hot: true

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?limit=100000",
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        htmlTemplate,
    ],
};