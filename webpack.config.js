
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [["@babel/preset-env", {
                        useBuiltIns: 'usage'
                    }],"@babel/preset-react"]
                }
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.wtff$/,
                use: [
                   {
                       loader: 'file-loader',
                   }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                   {
                       loader: 'url-loader',
                       options: {
                            outputPath: 'img/',
                            name: '[name].[hash].[ext]',
                            limit: 102400
                       }
                   }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ]
}