var webpack = require('webpack')
var path = require('path')
var settings = {
  isDevelopment: process.env.NODE_ENV !== 'production',
  ip: process.env.IP || '0.0.0.0',
  port: process.env.PORT || 5300
}

function buildConfig(options) {
  return {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: {
      main: path.join(__dirname, 'src', 'BrowserEntry.js')
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'assets/js/[name].js',
      publicPath: '/',
      pathinfo: true
    },
    devServer: {
      inline: true,
      historyApiFallback: true,
      host: options.ip,
      hot: true,
      noInfo: false,
      port: options.port,
      stats: {
        colors: true,
        reasons: true,
        chunks: true
      }
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
}

module.exports = (function(options) {
  return buildConfig(options)
})(settings)
