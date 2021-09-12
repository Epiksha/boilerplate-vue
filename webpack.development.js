const common = require('./webpack.common');
const { DefinePlugin, SourceMapDevToolPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    devtool: 'eval-source-map',

    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js"
        },
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new DefinePlugin({
            "__VUE_OPTIONS_API__": true,
            "__VUE_PROD_DEVTOOLS__": false,
        }),
        new SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(sass|s?css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
});