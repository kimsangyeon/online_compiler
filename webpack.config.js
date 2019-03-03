const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        compiler: './src/js/index.js',
        canvas: './src/js/canvas.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],

    module: {
        rules: [{
	    test: /\.js$/,
	    exclude: /node_modules/,
	    use: {
	        loader: 'babel-loader'
	    }
        }]
    }
};
