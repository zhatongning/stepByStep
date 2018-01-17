const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)

const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const app = new webpackDevServer(compiler, options)

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});