const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new CleanWebpackPlugin()],

    module: {
        rules: [
                    {
                        test: /\.html$/,
                        use: {
                            loader: "html-loader",
                            options: {
                                attrs: [":src"]
                            }
                }
            }
        ]
    }
}