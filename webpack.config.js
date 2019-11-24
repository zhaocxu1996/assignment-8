const path = require('path');
const webpack = require('webpack');

let outDirectory = path.resolve(__dirname, 'dist');
let outputFilename = '[name].js';

module.exports = {
    mode: 'production',
    entry: {
        server: './server.js',
      },
    output: {
        filename: outputFilename,
        path: outDirectory,
        publicPath: '/'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    module: {
        rules: [
          {
            // Transpiles ES6-8 into ES5
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },    

};