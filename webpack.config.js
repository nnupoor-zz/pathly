// const path = require('path');
// const webpack = require('webpack');

// const NODE_ENV = process.env.NODE_ENV;

// const setPath = function(folderName) {
//   return path.join(__dirname, folderName);
// }

// const buildingForLocal = () => {
//   return (NODE_ENV === 'development');
// };




// const config = {
//   /**
//    * You can use these too for bigger projects. For now it is 0 conf mode for me!
//    */
//   // entry: {
//   //   build: path.join(setPath('src'), 'main.js'),
//   //   vendor: path.join('setPath('src'), 'vendor.js')
//   // },
//   // output: {
//   //   path: buildingForLocal() ? path.resolve(__dirname) : setPath('dist'), //this one sets the path to serve
//   //   publicPath: setPublicPath(),
//   //   filename: buildingForLocal() ? 'js/[name].js' : 'js/[name].[hash].js'
//   // },
//   resolveLoader: {
//     modules: [setPath('node_modules')]
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: false
//   },
//   plugins: [
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: [{
//           loader: "babel-loader",
//           options: { presets: ['es2015'] }
//         }]
//       } 
//     ]
//   },
// };
// module.exports = config; 
