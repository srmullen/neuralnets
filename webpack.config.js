const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        neuralnets: "./src/index.js",
        gradientDecent: "./src/gradient-decent"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins:[
        new DashboardPlugin({port: 4001}),
        new HtmlWebpackPlugin({
            filename: "neuralnets.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "gradientdecent.html",
            template: "./src/index.html"
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        },
        {
            test: /\.js$/,
            loaders: ["babel-loader"],
            exclude: /node_modules/
        }]
    },
    devServer: {
        index: "neuralnets.html",
        contentBase: path.join(__dirname, "./"),
        port: 4000
    }
}
