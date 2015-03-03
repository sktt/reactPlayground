module.exports = {
  cache: true,
  entry: [
    __dirname + '/app.js',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000'
  ],
  output: {
    path: __dirname + '/dist/js',
    publicPath: 'http://localhost:8090/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js(|x)$/, loaders: ['react-hot', 'jsx-loader?harmony'] },
      { test: /\.scss$/, exclude: /\.useable\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
      { test: /\.useable\.scss$/, loader: 'style/useable!css!sass?outputStyle=expanded' }
    ]
  }
};
