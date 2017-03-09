module.exports = {
  entry: './App/index.js',
  output: {
    filename: './App/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['react', 'camo'], compact: false} },
    ]
  }
};