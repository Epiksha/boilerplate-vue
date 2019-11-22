const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],

    plugins: [
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.svg/,
                use: [
                    'babel-loader',
                    'vue-svg-loader'
                ]
            },
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