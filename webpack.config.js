const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: join(__dirname, 'assets'),
        port: 3000,
        historyApiFallback: true
    },
    watch: true,
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|ttf|eot|svg|jpe?g|png)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.gif$/,
                loader: 'url-loader',
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: join(__dirname, 'dist/index.html'),
            template: join(__dirname, 'src/misc/template.html'),
            inject: true,
        }),
    ]
}