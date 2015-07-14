webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8090',
    'webpack/hot/only-dev-server',
    __dirname + '/app.jsx'
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'http://localhost:8090/',
    filename: 'bundle.js',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0']
      },
      { test: /\.scss$/, exclude: /\.useable\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
      { test: /\.useable\.scss$/, loader: 'style/useable!css!sass?outputStyle=expanded' }
    ]
  }
};
