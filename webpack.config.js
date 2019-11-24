const path = require('path');
const webpack = require('webpack');

let outDirectory = path.resolve(__dirname, 'dist');
let outputFilename = '[name].js';

module.exports = {
    mode: 'production',
    entry: './server.js',
    output: {
        filename: outputFilename,
        path: outDirectory,
        publicPath: '/'
    },
    devServer: {
        contentBase: outDirectory
    }
};