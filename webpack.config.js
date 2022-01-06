const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
     plugins: [new HtmlWebpackPlugin({
         template: "./src/template.html"
     })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|mp3)$/,
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: 'file-loader',
                //     }
                // ],
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //             plugins: ['@babel/plugin-proposal-object-rest-spread']
            //         }
            //     }
            // }
        ],
    },


}