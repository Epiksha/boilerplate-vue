const { VueLoaderPlugin } = require('vue-loader');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],

    plugins: [
        new VueLoaderPlugin(),
        new SpriteLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    'babel-loader'
                ]
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
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(woff|ttf|eot|jpe?g|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    }
};