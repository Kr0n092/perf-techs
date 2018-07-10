const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js', 
    second: './src/second.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "dist/fonts/[name].[ext]"
        }
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery"
          },
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      }
    ]
  }
};
