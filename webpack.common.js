const { resolve } = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/entry.js',
    ],

    output: {
        clean: true,
        filename: '[name].bundle.[contenthash].js',
        path: resolve(__dirname, 'dist'),
    },

    plugins: [
        new VueLoaderPlugin(),
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            chunkFilename: '[id].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.vue/,
                use: [
                    'vue-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.(vue|js)/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(sass|s?css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};