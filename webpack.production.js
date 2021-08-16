const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: {
                    removeAttrbuteQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new CssMinimizerPlugin(),
        ]
    },
});