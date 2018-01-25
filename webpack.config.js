const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader', options: {minimize: true}},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.min.css')
    ]
};