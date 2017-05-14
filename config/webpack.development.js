var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = {
  ip: process.env.IP || '0.0.0.0',
  port: process.env.PORT || 8080
}

function buildConfig(options) {
  return {
    context: path.resolve(__dirname, '..'),
    devtool: 'cheap-module-eval-source-map',
    entry: {
      main: path.join(__dirname, '..', 'src', 'BrowserEntry.js')
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'assets/js/[name].js',
      publicPath: '/',
      pathinfo: true
    },
    devServer: {
      contentBase: path.join(__dirname, '..', 'dist'),
      inline: true,
      historyApiFallback: true,
      host: options.ip,
      hot: true,
      noInfo: false,
      port: options.port,
      disableHostCheck: true,
      stats: {
        colors: true,
        reasons: true,
        chunks: true
      }
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.json']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
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
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    }
  }
}

module.exports = (function(options) {
  return buildConfig(options)
})(settings)
