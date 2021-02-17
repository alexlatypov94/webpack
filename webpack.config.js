const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    };

    if (isProduction) {
        config.minimizer = [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()];
    }

    return config;
};

const fileName = (ext) => (isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["./index.tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: fileName("js")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            "@models": path.resolve(__dirname, "src/models")
        }
    },
    optimization: optimization(),
    devServer: {
        port: 3000
    },
    devtool: "inline-source-map",

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            minify: {
                collapseWhitespace: isProduction,
                removeComments: isProduction
            }
        }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/assets/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),

        new MiniCssExtractPlugin({
            filename: fileName("css")
        }),

        new ESLintPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
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
                use: ["file-loader"]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                use: ["file-loader"]
            }
        ]
    }
};
