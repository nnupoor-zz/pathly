const webpack = require('webpack');
const path = require('path');
module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: "babel-loader",
            options: { presets: ['es2015'] }
          }]
        },
      ]
    },
    output: {
      filename: 'main.js',
      libraryTarget: 'umd',
      library: 'get-val',
      umdNamedDefine: true
    },
    target: 'node',
  }
];