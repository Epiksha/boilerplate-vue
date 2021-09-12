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
                exclude: /node_modules/,
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                include: [
                    resolve(__dirname, 'src/assets/images'),
                ],
            },
            {
                test: /\.svg$/,
                include: [
                    resolve(__dirname, 'src/assets/icons'),
                ],
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
        ],
    },
};