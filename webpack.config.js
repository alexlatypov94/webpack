const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
        stats: "errors-only"
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new ESLintPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node-modules/,

                loader: "ts-loader"
            },

            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-optional-chaining",
                            "@babel/transform-runtime"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/fonts"
            }
        ]
    }
};
