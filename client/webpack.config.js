module.exports = {
  cache: true,
  entry: [
    __dirname + '/app.js',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000'
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'http://localhost:8090/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.scss$/, exclude: /\.useable\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
      { test: /\.useable\.scss$/, loader: 'style/useable!css!sass?outputStyle=expanded' }
    ]
  }
};
