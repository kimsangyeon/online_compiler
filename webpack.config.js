const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'compiler.js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],

    module: {
        rules: [
            {
	            test: /\.js$/,
	            exclude: /node_modules/,
	            use: {
	                loader: 'babel-loader',
	                options: {
	                    presets: ['@babel/preset-env']
	                }
	            }
            }
        ]
    }
};