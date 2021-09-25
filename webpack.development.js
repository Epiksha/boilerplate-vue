const common = require('./webpack.common');
const { merge } = require('webpack-merge');

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
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(sass|s?css)$/,
                exclude: /node_modules/,
                use: [
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